const swapi = require('../swapi/fetch_swapi');

module.exports.getSpecies = async (req,res) => {
        let data =await swapi.consulta_fetch('https://swapi.py4e.com/api/species','GET');
        let species = data.data.results
       
        const arraySpecies = []
        species.forEach(specie => {
            const newSpecie = {
                nombre : specie.name,
                clasificacion : specie.classification,
                designacion: specie.designation,
                altura_promedio: specie.average_height,
                color_piel : specie.skin_colors,
                color_cabello: specie.hair_colors,
                color_ojos: specie.eye_colors,
                promedio_vida: specie.average_lifespan,
                mundo_natal: specie.homeworld,
                lenguaje: specie.language,
                gente: specie.people,
                peliculas: specie.films,
                creado: specie.created,
                editado: specie.edited,
                enlace: specie.url,
            }            
            arraySpecies.push(newSpecie)
        })
    res.status(200).json(arraySpecies);
}

module.exports.getOneSpecie = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/species/' + id, 'GET');
    let specie = data.data
    const newSpecie = {
        nombre : specie.name,
        clasificacion : specie.classification,
        designacion: specie.designation,
        altura_promedio: specie.average_height,
        color_piel : specie.skin_colors,
        color_cabello: specie.hair_colors,
        color_ojos: specie.eye_colors,
        promedio_vida: specie.average_lifespan,
        mundo_natal: specie.homeworld,
        lenguaje: specie.language,
        gente: specie.people,
        peliculas: specie.films,
        creado: specie.created,
        editado: specie.edited,
        enlace: specie.url,

    }

    res.status(200).json(newSpecie);
}