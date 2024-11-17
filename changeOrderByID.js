// v3
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/changeOrderById', (req, res) => {
  const {
    'customer-id': customerId,
    email,
    'phone-number': phoneNumber,
    'product-code': productCode,
    'quantity-amount': quantityAmount,
    fname,
    lname
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  res.status(200).json({
    message: 'Received order change request successfully',
    data: {
      'customer-id': customerId,
      email,
      'phone-number': phoneNumber,
      'product-code': productCode,
      'quantity-amount': quantityAmount,
      fname,
      lname
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});