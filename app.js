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

let idGen = 0

app.post("/submit", (req, res) => {
    post_list.push({id: idGen++, title: req.body.title, description: req.body.description, content: req.body.content})
    res.redirect("/blog")
})

app.post("/delete", (req, res) => {
    post_list = post_list.filter((post) => post.id != req.body.id)
    res.redirect("/blog")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})