const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

module.exports = app;
