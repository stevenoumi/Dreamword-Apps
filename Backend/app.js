const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRoutes = require('./src/routes/authRoutes');
const profileRoutes = require('./src/routes/profileRoutes');
const productRoutes = require('./src/routes/productRoutes');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true, 
}));

app.use('/auth', userRoutes);
app.use('/profile', profileRoutes);
app.use('/products', productRoutes);
app.use("/images", express.static('images'));

module.exports = app;
