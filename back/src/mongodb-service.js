const environment = require('./environment')

var MongoClient = require("mongodb").MongoClient;

const bddName = environment.mongodb.bdd


var bd = null

function init() {
    return new Promise(observe => {
        MongoClient.connect(`mongodb://${environment.mongodb.host}/${bddName}`, { useUnifiedTopology: true }, function (error, dbElem) {
            if (error) {
                observe(false)
                return funcCallback(error)
            };
            bd = dbElem
            console.log(`Connecté à la base de données '${bddName}'`);
            observe(bd)
        });
    })
}






module.exports = {
    bd,
    init
}