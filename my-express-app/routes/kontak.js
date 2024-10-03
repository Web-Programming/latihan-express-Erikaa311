const express = require('express');
const router = express.Router();

// Route ke halaman /kontak
router.get('/kontak', (req, res) => {
  res.render('kontak', { title: 'Hubungi Kami' });
});

// Route untuk menangani form submission
router.post('/kontak', (req, res) => {
  const { nama, email, pesan } = req.body;
  // Lakukan sesuatu dengan data yang dikirim
  res.send(`Terima kasih, ${nama}! Pesan Anda telah terkirim.`);
});

module.exports = router;