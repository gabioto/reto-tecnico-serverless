const express = require('express');

const routes = express.Router({
    mergeParams: true
})

const { getStartShips, getOneStartShip } = require('../Controllers/startShip.controller')
routes.get('/', getStartShips)
routes.get('/:id', getOneStartShip)
module.exports = {
    routes
}