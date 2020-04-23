const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set("view engine","jade")

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/submit-form', (req, res) => {
    //const username = req.body.foo
    //...
    // res.render('sample');
    console.log(req.body);
    res.render('sample',
        { fname : req.body.fname }
        { lname : req.body.lname }
        { email : req.body.email }
    )
})


app.listen(port, () => console.log(`Happy app listening on port ${port}!`))

const startServerAndTest = require("start-server-and-test")





