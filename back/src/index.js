const MongoService = require('./services/mongodb')
const App = require('./app')


MongoService.init().then(res=>{
    console.log(res)
    App.init()
}, err=>{
    console.log("Error MongoDB Connexion",err)
})