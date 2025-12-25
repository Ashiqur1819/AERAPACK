const express = require("express")
const app = express()

const db = require("./config/mongoose-connection")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/owners", ownersRouter)
app.get("/users", usersRouter)
app.get("/products", productsRouter)

// app.get("/", (req, res) => {
//     console.log("Connected")
// })

app.listen(3000, () => {
    console.log("Server is running")
})