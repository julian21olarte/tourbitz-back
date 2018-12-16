'use strict';
const Hubspot = require('hubspot');

// create hubspot client
const hubspot = new Hubspot({ apiKey: process.env.HUBSPOT_API });


// FUNCTIONS
const createCompany = (company) => {
  return hubspot.companies.create(company)
}

const addContactToCompany = (company_id, contact_id) => {
  return hubspot.companies.addContactToCompany({ companyId: company_id, contactVid: contact_id })
}

const getContacts = (company_id) => {
  return hubspot.companies.getContacts(company_id);
}


module.exports = {
  createCompany,
  addContactToCompany,
  getContacts
}