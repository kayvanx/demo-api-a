// version 3.90
const express = require('express');
const app = express();

app.use(express.json());

// Middleware function for basic authentication
const authenticateBasic = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const encodedCredentials = authHeader.split(' ')[1];
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
    const [username, password] = decodedCredentials.split(':');

    // Replace this with your actual authentication logic
    // For example, check if the username and password match a user in your database
    if (username === 'your-username' && password === 'your-password') {
      next();
    } else {
      return res.sendStatus(401); // Unauthorized
    }
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

app.post('/api/cancelOrderById/MSFT', authenticateBasic, (req, res) => {
  const {
    'credit-card': creditCard,
    'date-of-birth': dateOfBirth,
    'first-name': firstName,
    'quantity-amount': quantityAmount,
    'social-security': socialSecurity,
    fname,
    lname
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  // You can add your logic here to cancel the order based on the provided parameters

  res.status(200).json({
    message: 'Received cancellation request successfully',
    data: {
      'credit-card': creditCard,
      'date-of-birth': dateOfBirth,
      'first-name': firstName,
      'quantity-amount': quantityAmount,
      'social-security': socialSecurity,
      fname,
      lname
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});