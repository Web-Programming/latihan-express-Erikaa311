var express = require('express');
var router = express.Router();

const kategoriController = require('../controllers/kategori');

router.get("/", kategoriController.index); //list produk
router.post("/insert", kategoriController.insert); //insert kategori
router.patch("/update/:id", kategoriController.update); //mengupdate kategori
router.get("/show/:id", kategoriController.show); //show detail kategori by id
router.delete("/delete/:id", kategoriController.destroy); //delete kategori by id

module.exports = router;