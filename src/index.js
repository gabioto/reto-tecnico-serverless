const express= require('express');
const json = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const { routes : peopleRoutes }  = require('./Routes/people.routes');
const { routes : filmRoutes }  = require('./Routes/film.routes');
const { routes : planetRoutes }  = require('./Routes/planet.routes');
const { routes : specieRoutes }  = require('./Routes/specie.routes');
const { routes : startShipRoutes }  = require('./Routes/startShip.routes');
const { routes : vehicleRoutes }  = require('./Routes/vehicle.routes');


const { routes : plantasRoutes }  = require('./Routes/plantas.routes');

const app = express();



app.use(cors());
app.use(bodyParser.json())
app.use(json()); 

app.use('/people',peopleRoutes)
app.use('/films',filmRoutes)
app.use('/planets',planetRoutes)
app.use('/species',specieRoutes)
app.use('/starships',startShipRoutes)
app.use('/vehicles',vehicleRoutes)

app.use('/plantas',plantasRoutes)

module.exports = app;