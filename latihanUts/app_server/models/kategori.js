let mongoose = require("mongoose");

let schemakategori = new mongoose.Schema({ 
    nama : String,
   deskripsi : {
        type: String,
        require: true,
    },
    create_at : {
        type: Date,
    },
    update_at: {

    },
    aktif : Boolean,
 });


mongoose.model('kategori', schemakategori);