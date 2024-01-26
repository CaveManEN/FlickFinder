// import .env and using config method to retreive API key
require('dotenv').config()
const path = require('path');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
// store cors in a const to use as middleware in our app
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./graphql');
const fetch = require('node-fetch');
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

app.use(indexRoute);
app.use(aboutRoute);
app.use(contactRoute);

// use cors middleware to allow cross origin requests
// allows client to request data from the server's api fetched data
app.use(cors());



// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to FlickFinder!');
});

// Create route with a variable in the path
app.get('/results/:searchTerm', async (req, res) => {
  try {
    const response = await fetch(`https://imdb-com.p.rapidapi.com/auto-complete?q=${req.params.searchTerm}&rapidapi-key=${process.env.API_KEY}`);
    if (!response.ok) {
      throw new Error(`Error from IMDb API: ${response.status} - ${response.statusText}`);
    }
    const jsonData = await response.json();
    res.json(jsonData.data.d);
  } catch (error) {
    console.error('Error in /results route:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));


  
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();

// Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// });