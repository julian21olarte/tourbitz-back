'use strict';
const contactService = require('../services/contact.service.js');


const createContact = (req, res) => {
  const newContact = req.body;
  let properties = [];
  Object.keys(newContact).map((key) => {
    properties.push({property: key, value: newContact[key]});
  });
  contactService.createContact({properties})
    .then(contact => {
      if(!contact) {
        return res.status(404).send({message: 'Contact' + name + ' could not be created'});
      }
      return res.status(200).send(contact);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

module.exports = {
  createContact
}