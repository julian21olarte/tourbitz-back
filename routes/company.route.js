'use strict';
const express = require('express');
const router = express.Router();
const companyApi = require('../api/company.api');


router.post('/', companyApi.createCompany); // create a new company
router.put('/:company_id/contact/:contact_id', companyApi.addContactToCompany); // add contact to company
router.get('/:company_id/contacts', companyApi.getContacts); // list all contacts in a company

module.exports = router;
