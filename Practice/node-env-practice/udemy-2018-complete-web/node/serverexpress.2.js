const express = require("express");

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'sally',
        hobby: 'soccer'
    }
    res.send(user)
    // res.send('hellooooooo')
})

app.listen(3000);