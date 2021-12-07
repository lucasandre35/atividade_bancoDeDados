const express = require("express")
const bodyParser = require("body-Parser")
const mongoose = require("mongoose")

const app = express()


mongoose.connect("mongoose://localhost:27017/senac", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


let db = mongoose.connection;


// Captura de erro
db.on("error", console.log.bind(console, "connection error"))
db.once("open", function () {
    console.log("conexão feita com sucesso.")
})

const index = require("./routers/index")
const tarefas = require("./routers/tarefasRoute")


//configurar body parser
app.use(bodyParser.json());
// app.use(express.json()); - Podemos usar a propria funcão de parser

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use("/", index)
app.use("/tarefas", tarefas)


module.exports = app