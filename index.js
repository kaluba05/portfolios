const express = require('express');
const app = express();

// When someone visits the root URL ("/"), redirect them to Google
app.get('/', (req, res) => {
  res.redirect('https://embeds.beehiiv.com/c59cff7e-fc1b-47b3-add3-4175ce85a1ea');
});

// Start the server and listen on whatever port is given to us,
// or 3000 by default on your local machine.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
