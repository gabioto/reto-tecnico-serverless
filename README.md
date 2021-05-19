# Reto tecnico Serverless AWS
Integracion con el API de SWAPI(Start Wars) en Node.js - Express con el framework Serverless , asi como la implentacion de la API con un  solo modelo con DynamoDB.

## Ejecutar API en local (SWAPI)
* Primero instalar las dependencias con el comando:

    `npm install`
* Para correr el API en local host

    `serverless offline start`

## Deploy en AWS
*COnfigurar acceso a AWS utilizando los credenciales de un usuario creado en el servicio IAM  de AWS.

    `serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET`

* comando para realizar el deploy

    `serverless deploy`

* Se hizo el deploy en una cuenta personal de AWS el cual esta disponible en: https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/plantas cambiar el modelo plantas por otros modelos, presentes en los ENDpoints

## Integracion con SWAPI

La integracion con [SWAPI](https://swapi.py4e.com/documentation), se hizo la obtención de datos y se mapearon las claves al español, las funciones implementadas se llaman desde api ,a travez de index.js 
Las funciones en especifico se encuentran en la carpeta [controllers](src/controllers)



Los End-points implementados  para probar la integracion con SWAPI son los siguientes :

* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/vehicles
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/vehicles/{id}  Recupera un solo objeto del modelo pelicula de SWAPI, epecificando su **id** de objeto como parametro.

* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/people
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/people/{id}
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/films
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/films/{id}
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/planets
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/planets/{id}
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/species
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/species/{id}
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/startships
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/startships/{id}

## DynamoDB
Se creo tres end-points en DynamoDB con el modelo **plantas** el cual contiene los siguientes atributos:

```json
{
    "name": "nombre_planta",
    "familia":"cautus,suculentas,begonias,helechos",
    "tipo":"exterior,interior",
    "iluminacion":"pleno sol,sol, sombra",
    "riego":"escaso"
}
```
Los end-points  implementados para probar la conexion a DynamoDB son:


* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/plantas : Recupera lista de plantas alamcenadas en la tabla **plantas** de DynamoDB.
* `GET` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/plantas/{id} : Recupera el objeto de la planta solicitada segun el parametro id de la tabla **plantas** de DynamoDB.
* `POST` https://nk951yvk5d.execute-api.us-east-1.amazonaws.com/dev/plantas : Guarda un objeto planta en la tabla **plantas** de DynamoDB.
