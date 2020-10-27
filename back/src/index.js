const MongoService = require('./services/mongodb')
const App = require('./app')

App.init()
MongoService.init().then(res => {
    console.log("Connexion mongoDB OK")
}, (err) => {
    console.log("Connexion mongoDB Error :",err)
})