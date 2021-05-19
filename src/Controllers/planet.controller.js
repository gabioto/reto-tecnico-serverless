const swapi = require('../swapi/fetch_swapi');

module.exports.getPlanets = async (req,res) => {
        let data =await swapi.consulta_fetch('https://swapi.py4e.com/api/planets','GET');
        let planetas = data.data.results
       
        const arrayPlanetas = []
        planetas.forEach(planeta => {
            const newPlanet = {
                nombre : planeta.name,
                periodo_rotacion : planeta.rotation_period,
                periodo_orbital: planeta.orbital_period,
                diametro: planeta.diameter,
                clima : planeta.climate,
                gravedad: planeta.gravity,
                terreno: planeta.terrain,
                superficie_agua: planeta.surface_water,
                poblacion: planeta.population,
                residentes: planeta.residents,
                peliculas: planeta.films,
                creado: planeta.created,
                editado: planeta.edited,
                enlace: planeta.url,
            }            
            arrayPlanetas.push(newPlanet)
        })
    res.status(200).json(arrayPlanetas);
}

module.exports.getOnePlanet = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/planets/' + id, 'GET');
    let planeta = data.data
    const newPlanet = {
        nombre : planeta.name,
        periodo_rotacion : planeta.rotation_period,
        periodo_orbital: planeta.orbital_period,
        diametro: planeta.diameter,
        clima : planeta.climate,
        gravedad: planeta.gravity,
        terreno: planeta.terrain,
        superficie_agua: planeta.surface_water,
        poblacion: planeta.population,
        residentes: planeta.residents,
        peliculas: planeta.films,
        creado: planeta.created,
        editado: planeta.edited,
        enlace: planeta.url,

    }

    res.status(200).json(newPlanet);
}