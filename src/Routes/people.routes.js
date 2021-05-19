const express = require('express');

const routes = express.Router({
    mergeParams:true
})

const { getPeople,getOnePerson}  = require('../Controllers/people.controller')
routes.get('/',getPeople)
routes.get('/:id',getOnePerson)

module.exports = {
    routes
}