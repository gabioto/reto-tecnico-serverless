const swapi = require('../swapi/fetch_swapi');

module.exports.getFilms = async (req, res) => {
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/films', 'GET');
    let peliculas = data.data.results

    const arrayPeli = []
    peliculas.forEach(peli => {
        const newPeli = {
            titulo: peli.title,
            episodio_clave: peli.episode_id,
            rastreo_apertura: peli.opening_crawl,
            director: peli.director,
            productor: peli.producer,
            fecha_lanzamiento: peli.release_date,
            personajes: peli.characters,
            planetas: peli.planets,
            naves_estelares: peli.starships,
            vehiculos: peli.vehicles,
            especies: peli.species,
            creado: peli.created,
            editado: peli.edited,
            url: peli.url

        }
        arrayPeli.push(newPeli)
    })
    res.status(200).json(arrayPeli);
}

module.exports.getOneFilm = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/films/' + id, 'GET');
    let peli = data.data
    const newPeli = {
        titulo: peli.title,
        episodio_clave: peli.episode_id,
        rastreo_apertura: peli.opening_crawl,
        director: peli.director,
        productor: peli.producer,
        fecha_lanzamiento: peli.release_date,
        personajes: peli.characters,
        planetas: peli.planets,
        naves_estelares: peli.starships,
        vehiculos: peli.vehicles,
        especies: peli.species,
        creado: peli.created,
        editado: peli.edited,
        url: peli.url

    }

    res.status(200).json(newPeli);
}