const express = require('express');
const app = express();

// When someone visits the root URL ("/"), redirect them to Google
app.get('/', (req, res) => {
  res.redirect('https://embeds.beehiiv.com/8e14a814-c5fb-4b5f-a671-86dd4ae6795c');
});

// Start the server and listen on whatever port is given to us,
// or 3000 by default on your local machine.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
