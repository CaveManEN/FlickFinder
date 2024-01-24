// import .env and using config method to retreive API key
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// store cors in a const to use as middleware in our app
const cors = require('cors');
// const { authMiddleware } = require('./utils/auth');
const fetch = require('node-fetch');


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

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});