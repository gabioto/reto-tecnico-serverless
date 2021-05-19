const express = require('express');

const routes = express.Router({
    mergeParams: true
})

const { getVehicles, getOneVehicle } = require('../Controllers/vehicle.controller')
routes.get('/', getVehicles)
routes.get('/:id', getOneVehicle)
module.exports = {
    routes
}