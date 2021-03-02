const router = require("express").Router();
const UserCtrl = require('./../controllers/user.controller')


router.get("/sendsms", UserCtrl.sendsms);



module.exports = router 