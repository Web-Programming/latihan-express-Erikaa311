//app.js
const express = require('express');
const app = express();
const port = 3000;

//route get
//app.get('/', (req,res) => {
    //res.send('hello, GET request!.');
//});

//middleware untuk parsing body req
app.use(express.json());

//route post
app.post('/submit',(req,res)=> {
    const {name} = req.body;
    res.send('hello, ${name}!');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log('server running at http://localhost:${port}/');
});