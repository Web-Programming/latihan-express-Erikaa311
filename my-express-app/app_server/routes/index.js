var express = require('express');
var router = express.Router();

const mainControllers= require("../controllers/main")

/* GET home page. */
router.get('/', mainControllers.index) 

//buat route ke halaman kontak  (/kontak) dengan method get
router.get("/kontak", mainControllers.kontak);
router.get("/kontak3", mainControllers.kontak);
module.exports = router;
