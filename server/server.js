// import .env and using config method to retreive API key
require('dotenv').config()
const express = require('express');
const app = express();
// const PORT = process.env.PORT || 3001;
// store cors in a const to use as middleware in our app
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');
const fetch = require('node-fetch');

//imports for graphql
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const db = require('./config/connection'); 


const path = require('path');


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

// Middleware
// app.use(express.json());
// app.use('/graphql', expressMiddleware(server, {
//   context: authMiddleware
// }));

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to FlickFinder!');
});

// Create route with a variable in the path
app.get('/results/:searchTerm', async (req, res) => {
  // access query variable from the req.params searchTerm from the client side
  // access API Key from the .env file
  // const response = await fetch(`https://imdb-com.p.rapidapi.com/auto-complete?q=${req.params.searchTerm}&rapidapi-key=${process.env.API_KEY}`);
  const response = await fetch(`https://imdb146.p.rapidapi.com/v1/find/?query=${req.params.searchTerm}&rapidapi-key=${process.env.API_KEY}`)
  const jsonData = await response.json(); // store parsed json data
  // res.json(jsonData.data.d) // respond with the data array of objects of movies in json
  res.json(jsonData.titleResults.results)
  console.log(jsonData.titleResults.results);
});

app.get('/results/movie/:movieId', async (req, res) => {
  // const response = await fetch(`https://imdb-com.p.rapidapi.com/title/details?tconst=${req.params.movieId}&rapidapi-key=${process.env.API_KEY}`);
  const response = await fetch(`https://imdb146.p.rapidapi.com/v1/title/?id=${req.params.movieId}&rapidapi-key=${process.env.API_KEY}`)
  const jsonData = await response.json();
  res.json(jsonData);
  console.log('server data: ', jsonData);
});


// import our typeDefs and resolvers for graphql
const { typeDefs, resolvers } = require('./schema');

// bring in instance of server for graphql
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Route for graphql
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

// Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// });