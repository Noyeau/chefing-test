
const router = require("express").Router();
const auth = require("./auth.route");
const list = require("./list.route");


router.get('/', (req, res) =>{
    res.end("Hello World!")
})

router.use('/auth', auth)
router.use('/list', list)



module.exports = router;