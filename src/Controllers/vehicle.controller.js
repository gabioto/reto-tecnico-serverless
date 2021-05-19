const swapi = require('../swapi/fetch_swapi');

module.exports.getVehicles = async (req, res) => {
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/vehicles', 'GET');
    let vehicles = data.data.results

    const arrayVehicles = []
    vehicles.forEach(vehicle => {
        const newVehicle = {
            nombre: vehicle.name,
            modelo: vehicle.model,
            fabricante: vehicle.manufacturer,
            costo_en_creditos: vehicle.cost_in_credits,
            longitud: vehicle.length,
            velocidad_máxima_atmosfera: vehicle.max_atmosphering_speed,
            tripulacion: vehicle.crew,
            pasageros: vehicle.passengers,
            capacidad: vehicle.cargo_capacity,
            consumibles: vehicle.consumables,
            clase_vehiculo: vehicle.vehicle_class,
            pilotos: vehicle.pilots,
            peliculas: vehicle.films,
            creado: vehicle.created,
            editado: vehicle.edited,
            url: vehicle.url
        }
        arrayVehicles.push(newVehicle)
    })
    res.status(200).json(arrayVehicles);
}

module.exports.getOneVehicle = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/starships/' + id, 'GET');
    let vehicle = data.data
    const newVehicle = {
        nombre: vehicle.name,
        modelo: vehicle.model,
        fabricante: vehicle.manufacturer,
        costo_en_creditos: vehicle.cost_in_credits,
        longitud: vehicle.length,
        velocidad_máxima_atmosfera: vehicle.max_atmosphering_speed,
        tripulacion: vehicle.crew,
        pasageros: vehicle.passengers,
        capacidad: vehicle.cargo_capacity,
        consumibles: vehicle.consumables,
        clase_vehiculo: vehicle.vehicle_class,
        pilotos: vehicle.pilots,
        peliculas: vehicle.films,
        creado: vehicle.created,
        editado: vehicle.edited,
        url: vehicle.url

    }

    res.status(200).json(newVehicle);
}