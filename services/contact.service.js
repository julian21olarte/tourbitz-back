'use strict';
const Hubspot = require('hubspot');

// create hubspot client
const hubspot = new Hubspot({ apiKey: process.env.HUBSPOT_API });


// FUNCTIONS
const createContact = (contact) => {
  return hubspot.contacts.create(contact);
}

module.exports = {
  createContact
}