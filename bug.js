const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here, the error should be sent to the client
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // No proper handling for the case when the user doesn't exist
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));