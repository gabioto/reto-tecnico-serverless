'use-strict';
const fetch = require('node-fetch');

module.exports.consulta_fetch = async (url, method) =>{
    try{
        let data = await fetch(
            url,
            {
                method: method,
                headers: {
                    'content-type':'application/json'
                }
            }
        );
        let respuesta_swapi = await data.json().catch(e => {if(e) {throw e}})
        return{
            error: false,
            data: respuesta_swapi
        };
    }
    catch(e){
        return {
            error: true,
            messaje: e
        };
    }
}

// module.exports = {
//     consulta_fetch
// }