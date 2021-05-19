const swapi = require('../swapi/fetch_swapi');

module.exports.getPeople = async (req, res) => {
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/people', 'GET');
    let personas = data.data.results

    const arrayPeople = []
    personas.forEach(person => {
        const newPerson = {
            nombre: person.name,
            height: person.altura,
            color_pelo: person.hair_color,
            color_de_piel: person.skin_color,
            color_ojos: person.eye_color,
            año_nacimiento: person.birth_year,
            genero: person.gender,
            mundo_natal: person.homeworld,
            personculas: person.films,
            especie: person.species,
            vehiculos: person.vehicles,
            naves_stelares: person.starships,
            creado: person.created,
            editado: person.edited,
            enlace: person.url,
        }
        arrayPeople.push(newPerson)
    })
    res.status(200).json(arrayPeople);
}

module.exports.getOnePerson = async (req, res) => {
    let id = req.params.id
    let data = await swapi.consulta_fetch('https://swapi.py4e.com/api/people/' + id, 'GET');
    let person = data.data
    const newPerson = {
        nombre: person.name,
        height: person.altura,
        color_pelo: person.hair_color,
        color_de_piel: person.skin_color,
        color_ojos: person.eye_color,
        año_nacimiento: person.birth_year,
        genero: person.gender,
        mundo_natal: person.homeworld,
        personculas: person.films,
        especie: person.species,
        vehiculos: person.vehicles,
        naves_stelares: person.starships,
        creado: person.created,
        editado: person.edited,
        enlace: person.url,
    }

    res.status(200).json(newPerson);
}