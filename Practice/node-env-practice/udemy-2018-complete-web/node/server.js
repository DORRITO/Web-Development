const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log(req.body);
    res.send('hellooooooo')
})

app.listen(3000);