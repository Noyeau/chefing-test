const jwt = require('jsonwebtoken');
const fs = require('fs')
const jwtSecret = fs.readFileSync('jwtSecret').toString('utf-8');

const bcrypt = require('bcrypt');
const mongoService = require('./mongodb')

const dureeJwt = (60 * 60 * 1000)
var ObjectID = require('mongodb').ObjectID; 






function createAccount(user) {
    if (user.password) {
        user.password = bcrypt.hashSync(user.password, 10);
    }
    return new Promise((resolve, reject) => {
        mongoService.connectTo('users').then(async Users => {
            Users.insertOne(user).then(result => {
                resolve(result.ops[0])
            }, err => {
                console.log("err", err)
                reject({ err })
            })
        })
    })
}


function logIn(userForm) {
    return new Promise(async (resolve, reject) => {
        mongoService.connectTo('users').then(Users => {
            Users.findOne({ email: userForm.email }).then(user => {
                if (!user) {
                    return reject('aucun compte/password correspondant')
                }
                let valid = bcrypt.compareSync(userForm.password, user.password)
                if (!valid) {
                    return reject('aucun compte/password correspondant')
                }

                let jwtData = {
                    _id: user._id,
                    email: user.email
                }

                delete user.password

                resolve({ jwtToken: createJwt(jwtData), user })
            }, err => {
                reject('aucun compte/password correspondant')
            })
        })
    })

}


function createJwt(jwtDatas) {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + dureeJwt,
        data: jwtDatas
    }, jwtSecret)
}


function verifyJwt(token) {
    try {
        var decoded = jwt.verify(token, jwtSecret);
        return decoded
    }
    catch{
        console.log("JWT error")
        return null
    }
}




module.exports = {
    verifyJwt,
    createAccount,
    logIn
}