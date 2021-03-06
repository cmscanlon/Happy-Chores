const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set("view engine","jade")

//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/submit-form', (req, res) => {
    //const username = req.body.foo
    //...
    // res.render('sample');
    console.log(req.body);
    res.render('sample',
        { email : req.body.email,
         fname: req.body.fname,
         lname: req.body.lname }
    )
})


app.listen(port, () => console.log(`Happy Chore app listening on port ${port}!`))

const startServerAndTest = require("start-server-and-test")





