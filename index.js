import express from "express";
import bodyParser from "body-parser"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express()
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})