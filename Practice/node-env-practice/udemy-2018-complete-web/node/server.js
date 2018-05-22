const express = require("express");

const app = express();

app.use((req,res,next) => {
    console.log('<h1>HelooooooooO</h1>');
    next();
})

app.get('/', (req, res) => {
    res.send('hellooooooo')
})

app.listen(3000);