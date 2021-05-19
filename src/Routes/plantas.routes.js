const express = require('express');

const routes = express.Router({
    mergeParams: true
})

const { createPlant,getOnePlant,getListPlants } = require('../Controllers/plantas.controller')
routes.post('/', createPlant)
routes.get('/', getListPlants)
routes.get('/:id', getOnePlant)


module.exports = {
    routes
}