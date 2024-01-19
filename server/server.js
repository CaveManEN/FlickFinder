const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { authMiddleware } = require('./utils/auth');

// Middleware
app.use(express.json());
app.use('/graphql', expressMiddleware(server, {
  context: authMiddleware
}));

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to FlickFinder!');
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on port 3000')
});
