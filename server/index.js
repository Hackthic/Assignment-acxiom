// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/eventManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/vendors', require('./routes/vendors'));
app.use('/api/products', require('./routes/products'));
app.use('/api/admin', require('./routes/admin'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
