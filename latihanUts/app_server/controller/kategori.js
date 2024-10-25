const mongoose = require("mongoose");
const Mahasiswa = mongoose.model("kategori");

//untuk menghandle request get all mahasiswa
const index = (req, res, next) => {
    Mahasiswa.find({}, { __v: 0 })
      .then((kategori) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const mhs = new kategori({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      create_at: req.body.create_at,
      update_at: req.body.update_at,
      aktif: true
    });
  
    kategori
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

//untuk menghandle request update mahasiswa
const update = (req, res, next) => {
     kategori
       .findByIdAndUpdate(req.params.id,{
            nama: req.body.nama,
            deskripsi: req.body.deskripsi,
            create_at: req.body.create_at,
            update_at: req.body.update_at,
            aktif: true
         })
        .then((result) => {
            kategori
            .findById(req.params.id)
            .then((kategori) =>{
                const responseMessage = {
                    code: 200,
                    success: true,
                    message: "Successfull",
                    data: mhs
                };
                res.status(200).json(responseMessage);
            });        
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request show detail
const show = (req, res, next) => {
    Mahasiswa
        .findById(req.params.id)
        .then((kategori) =>{
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: todo
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};


//untuk menghandle request delete
const destroy = (req, res, next) => {
    kategori
        .findByIdAndDelete(req.params.id)
        .then((kategori) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
            };
            res.status(200).json(responseMessage);
        });
        /*.catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });*/
};

module.exports = {
    index, insert, update, show, destroy
}