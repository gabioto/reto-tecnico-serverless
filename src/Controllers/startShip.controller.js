const swapi = require('../swapi/fetch_swapi');

module.exports.getStartShips = async (req, res) => {
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/starships', 'GET');
    let starships = data.data.results

    const arrayStarShips = []
    starships.forEach(starships => {
        const newship = {
            nombre: starships.name,
            modelo: starships.model,
            fabricante: starships.manufacturer,
            costo_en_creditos: starships.cost_in_credits,
            longitud: starships.length,
            velocidad_máxima_atmosfera: starships.max_atmosphering_speed,
            tripulacion: starships.crew,
            pasageros: starships.passengers,
            capacidad: starships.cargo_capacity,
            consumibles: starships.consumables,
            calificacion_hiperimpulsor: starships.hyperdrive_rating,
            mglt: starships.MGLT,
            clase_nave: starships.starship_class,
            pilotos: starships.pilots,
            peliculas: starships.films,
            creado: starships.created,
            editado: starships.edited,
            url: starships.url
        }
        arrayStarShips.push(newship)
    })
    res.status(200).json(arrayStarShips);
}


module.exports.getOneStartShip = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/starships/' + id, 'GET');
    let starships = data.data
    const newStarShips = {
        nombre: starships.name,
        modelo: starships.model,
        fabricante: starships.manufacturer,
        costo_en_creditos: starships.cost_in_credits,
        longitud: starships.length,
        velocidad_máxima_atmosfera: starships.max_atmosphering_speed,
        tripulacion: starships.crew,
        pasageros: starships.passengers,
        capacidad: starships.cargo_capacity,
        consumibles: starships.consumables,
        calificacion_hiperimpulsor: starships.hyperdrive_rating,
        mglt: starships.MGLT,
        clase_nave: starships.starship_class,
        pilotos: starships.pilots,
        peliculas: starships.films,
        creado: starships.created,
        editado: starships.edited,
        url: starships.url

    }

    res.status(200).json(newStarShips);
}