// version 2.1
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Replace this with your actual JWT secret key
const jwtSecret = 'your-secret-key';

// Middleware function to verify JWT token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

app.post('/api/getAllOrder', authenticateJWT, (req, res) => {
  const {
    city,
    'customer-id': customerId,
    'discount-tax': discountTax,
    password,
    email,
    'last-name': lastName,
    'phone-number': phoneNumber,
    'national-id': nationalId
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  // You can add your logic here to fetch orders based on the provided parameters

  res.status(200).json({
    message: 'Received order parameters successfully',
    data: {
      city,
      'customer-id': customerId,
      'discount-tax': discountTax,
      password,
      email,
      'last-name': lastName,
      'phone-number': phoneNumber,
      'national-id': nationalId
    }
  });
});

const port = 80;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});