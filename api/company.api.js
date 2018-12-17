'use strict';
const companyService = require('../services/company.service.js');


const createCompany = (req, res) => {
  const newcompany = req.body;
  let properties = [];
  Object.keys(newcompany).map((key) => {
    properties.push({name: key, value: newcompany[key]});
  });
  companyService.createCompany({properties})
    .then(company => {
      if(!company) {
        return res.status(404).send({message: 'Company could not be created'});
      }
      return res.status(200).send(company);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

const getAll = (req, res) => {
  companyService.getCompanies()
    .then(companies => {
      if(!companies && !companies.companies) {
        return res.status(404).send({message: 'Any company found'});
      }
      return res.status(200).send(companies.companies);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

const addContactToCompany = (req, res) => {
  const company_id = req.params.company_id;
  const contact_id = req.params.contact_id;
  companyService.addContactToCompany(company_id, contact_id)
    .then(resp => {
      if(!resp) {
        return res.status(404).send({message: 'The contact could not be added to company'});
      }
      return res.status(200).send(resp);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

const getContacts = (req, res) => {
  const company_id = req.params.company_id;
  companyService.getContacts(company_id)
    .then(contacts => {
      if(!contacts && !contacts.contacts) {
        return res.status(404).send({message: 'Error on getting list of contacts from company ' + company_id});
      }
      return res.status(200).send(contacts.contacts);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

module.exports = {
  createCompany,
  addContactToCompany,
  getContacts,
  getAll
}