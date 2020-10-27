const environment = require('../environment')

var MongoClient = require("mongodb").MongoClient;

const dbName = environment.mongodb.bdd

function init() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(`mongodb://${environment.mongodb.host}`, { useUnifiedTopology: true }, function (error, client) {
            if (error) {
                reject(error)
                return
            };
            const db = client.db(dbName);
            resolve(db)
        });
    })
}

function connectTo(collection) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(`mongodb://${environment.mongodb.host}`, { useUnifiedTopology: true }, async function (error, client) {
            if (error) {
                reject()
                return
            };
            const db = client.db(dbName);
        
            resolve(db.collection(collection))
        });
    })
}






module.exports = {
    connectTo,
    init
}