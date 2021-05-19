'use strict'
const AWS = require('aws-sdk')
const uuid = require('uuid')
let dynamoDb;
const PLANTS_TABLE = process.env.PLANTS_TABLE;

const IS_OFFLINE = process.env.IS_OFFLINE;

if (IS_OFFLINE === 'true') {
    console.log("acaaa");
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:3000'
  })
  //console.log(dynamoDb);
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
};


module.exports.createPlant = async (req, res) => {
    //console.log("entr a crear plantass")
    const datetime = new Date().toISOString();
    const { name,familia,tipo,iluminacion,riego} = req.body
    // if (typeof name !== 'string') {
    //     res.status(400).json({ error: '"name" must be a string' });
    // }
    const params = {
        TableName: PLANTS_TABLE,
        Item: {
          id: uuid.v1(),
          name: name,
          familia:familia,
          tipo:tipo,
          iluminacion:iluminacion,
          riego:riego,
          createAt: datetime,
          updatedAt: datetime
        },
      };
    
      dynamoDb.put(params, (error) => {
        if (error) {
            console.log("error crear",error)
          res.status(400).json({ error: error});
        }else{
            res.status(200).json({message:'creado'});
        }
       ;
      });
    
}
module.exports.getListPlants = async(req, res) => {
    const params = {
      TableName: PLANTS_TABLE,
      
    }
  
    dynamoDb.scan(params, (error, data) => {
      if (error) {
        console.log("errorr crear",error);
        res.status(400).json({ error: 'Could not get plants' });
      }else{
        res.status(200).json(data.Items);}
    });
  }

  module.exports.getOnePlant = async(req, res) => {
    const params = {
      TableName: PLANTS_TABLE,
      Key: {
        id: req.params.id,
      },
    }
  
    dynamoDb.get(params, (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: 'Could not get plants' });
      }
      if (result.Item) {
        const {id, name} = result.Item;
        res.json({ id, name });
      } else {
        res.status(404).json({ error: "plant not found" });
      }
    });
  }
