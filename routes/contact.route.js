'use strict';
const express = require('express');
const router = express.Router();
const contactApi = require('../api/contact.api');


router.post('/', contactApi.createContact);

module.exports = router;
