var express = require('express');
var router = express.Router();

// Route untuk halaman home (/)
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Beranda' });
});

// Route untuk halaman paket pariwisata (/paketwisata)
router.get('/paketwisata', function(req, res, next) {
  const paketList = [
    { id: 1, nama: 'Paket Bali', harga: 'Rp 2.000.000' },
    { id: 2, nama: 'Paket Lombok', harga: 'Rp 3.000.000' },
    { id: 3, nama: 'Paket Yogyakarta', harga: 'Rp 1.500.000' }
  ];
  res.render('paketpariwisata', { title: 'Paket Wisata', paketList });
});

// Route untuk halaman order paket (/orderpaket)
router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Order Paket Wisata' });
});

// Route untuk halaman detail order (/orderdetail)
router.post('/orderdetail', function(req, res, next) {
  const { paket, nama, email, jumlah } = req.body;
  res.render('orderdetail', { title: 'Detail Order', paket, nama, email, jumlah });
});
const express = require('express');
const path = require('path');

const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rute dasar
app.get('/', (req, res) => {
    res.render('index'); // Menggunakan file index.ejs
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = router;
