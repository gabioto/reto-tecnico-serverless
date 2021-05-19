const express = require('express');

const routes = express.Router({
    mergeParams: true
})

const { getPlanets, getOnePlanet } = require('../Controllers/planet.controller')
routes.get('/', getPlanets)
routes.get('/:id', getOnePlanet)
module.exports = {
    routes
}