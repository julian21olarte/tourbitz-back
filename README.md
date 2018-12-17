# tourbitz-backend
Backend for tourbitz test (Nodejs + express).

## Requirements

1. Nodejs 8.9.1+
2. Npm 5.5+

## Install
```
1. clone the project
2. npm install in root dir
```

## Deploy

```
1. Execute `npm start` or `npm run dev`.
```
> Default port is `3000`.


## Endpoints

> [POST] `/company` create a new company.
```
    // Example object for request
    {
      "name": "Kubesoft",
      "description": "A super company",
      "Country": "Colombia",
      "city": "Bogotá"
    }
```

> [POST] `/contact`
> create a new contact.
```
    // Example object for request
    {
      "email": "julian21olarte@gmail.com",
      "firstname": "Julian",
      "lastname": "Olarte",
      "phone": "123456",
      "city": "Cucuta",
      "address": "calle falsa 123",
      "company": "Tourbitz"
    }
```

> [PUT] `/company/{company_id}/contact/{contact_id}`
> Add a exists contact to exists company.

> [GET] `/company/{company_id}/contacts`
> List all contacts in a company.