const express = require('express');

const routes = express.Router({
    mergeParams: true
})

const { getSpecies, getOneSpecie } = require('../Controllers/specie.controller')
routes.get('/', getSpecies)
routes.get('/:id', getOneSpecie)
module.exports = {
    routes
}