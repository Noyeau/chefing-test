

const app = require('express')();
const http = require('http').createServer(app);


const cors = require('cors');
const path = require('path');
const corsOptions = require('./cors-config').corsOptions;
const bodyParser = require('body-parser');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swagger.js')(path.dirname(require.main.filename))
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerSpecs = swaggerJsdoc(swaggerOptions);


const preprocessService = require('./services/preprocess')


app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecs)
})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(cors(corsOptions))
app.use(bodyParser())


  //Vérification de la Token si présente
app.use(preprocessService.checkJwt)

app.use(routes)




function init() {
    return new Promise((resolve) => {
        http.listen(3000, function () {
            console.log('Example app listening on port 3000!')
            resolve()
        })
    })
}

module.exports = { init }





