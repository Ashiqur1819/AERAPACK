const express = require("express")
const app = express()

const db = require("./config/mongoose-connection")

const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/owners", ownersRouter)
app.get("/users", usersRouter)
app.get("/products", productsRouter)

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(3000, () => {
    console.log("Server is running")
})