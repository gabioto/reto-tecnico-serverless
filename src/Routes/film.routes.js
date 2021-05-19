const express = require('express');

const routes = express.Router({
    mergeParams:true
})

const { getFilms, getOneFilm}  = require('../Controllers/film.controller')
routes.get('/',getFilms)
routes.get('/:id',getOneFilm)

module.exports = {
    routes
}