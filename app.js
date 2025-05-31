import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

let post_list = []

app.get("/blog", (req, res) => {
    res.render("blog.ejs", {post_list})
})

// create post and post_list

app.post("/submit", (req, res) => {
    console.log(req.body)
    post_list.push(req.body)
    res.redirect("/blog")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})