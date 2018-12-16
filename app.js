'use strict';
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
const cors = require('cors');

const app = express();

const company = require('./routes/company.route');
const contact = require('./routes/contact.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// cors
app.use(cors({credentials: true, origin: '*'}));

// routes
app.use('/company', company);
app.use('/contact', contact);

// server
const server = app.listen(port, () => {
  console.log("Server listening on " + port);
});

module.exports = app;