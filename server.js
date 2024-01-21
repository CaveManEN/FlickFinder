const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const { authMiddleware } = require('./utils/auth');

// Routes
const indexRoute = require('./server/routes/index');
const aboutRoute = require('./server/routes/about');
const contactRoute = require('./server/routes/contact');

app.use(indexRoute);
app.use(aboutRoute);
app.use(contactRoute);

// Middleware
// app.use(express.json());
// app.use('/graphql', expressMiddleware(server, {
//   context: authMiddleware
// }));

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to FlickFinder!');
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on port 3001')
});
