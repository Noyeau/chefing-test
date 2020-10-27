const MongoService = require('./mongodb-service')
const App = require('./app')


MongoService.init().then(res=>{
    console.log(res)
    App.init()
})