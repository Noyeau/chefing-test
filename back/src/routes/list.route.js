const router = require("express").Router();
const mongoService = require("../services/mongodb");
var ObjectID = require('mongodb').ObjectID; 

/**
 * @swagger
 * /list:
 *   post:
 *     tags:
 *       - List
 *     description: Ajouter opu modifier un element de la liste
 *     parameters:
 *       - in: body
 *         name: Liste
 *     security:
 *       - JWT: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *      200:
 *        description: 'user'
 *      400:
 *        description: 'missing argument'
 *      403:
 *        description: 'no-user'
 *      500:
 *        description: 'error server'
 *
 */
router.post('/', async (req, res) => {
    if (!req.jwt || !req.jwt._id) {
        res.status(400).send({ erreur: "Veuillez vous authentifier" })
        return
    }
    mongoService.connectTo('userPieces').then(Pieces => {
        let piece = req.body
        piece.userId = req.jwt._id
        if (piece._id) {
            let filter = {
                _id: ObjectID(piece._id)
            }
            delete piece._id
            Pieces.updateOne(filter, { $set: piece }).then(result => {
                res.send(result)
            }, err => {
                console.log("err", err)
                res.status(400).send({ err })
            })
        }
        else {
            Pieces.insertOne(piece).then(result => {
                res.send(result.ops[0])
            }, err => {
                console.log("err", err)
                res.status(400).send({ err })
            })
        }
    })
})



/**
 * @swagger
 * /list:
 *   get:
 *     tags:
 *       - List
 *     description: Récupérer tous les elements de la liste
 *     security:
 *       - JWT: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *      200:
 *        description: 'Elements'
 *      400:
 *        description: 'missing argument'
 *      403:
 *        description: 'no-user'
 *      500:
 *        description: 'error server'
 *
 */
router.get('/', async (req, res) => {
    if (!req.jwt || !req.jwt._id) {
        res.status(400).send({ erreur: "Veuillez vous authentifier" })
        return
    }
    mongoService.connectTo('userPieces').then(async Pieces => {
        let cursor = Pieces.find({ userId: req.jwt._id })
        let tmp = []
        await cursor.forEach(x => {
            tmp.push(x)
        })
        res.send(tmp)
    })
})



module.exports = router;