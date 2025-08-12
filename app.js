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
    try {
        const deleteId = parseInt(req.body.id);
        console.log(deleteId)
        post_list = post_list.filter((post) => post.id != deleteId);
        console.log(post_list)
        res.redirect("/blog")
    }catch (error) {
        console.error(error.message);
    }
});

app.post("/edit_form", (req, res) => {
    const postId = parseInt(req.body.id);
    const foundIndex = post_list.findIndex((post) => post.id === postId);
    res.render("edit.ejs", {postId: postId, title: post_list[foundIndex].title, description: post_list[foundIndex].description, content: post_list[foundIndex].content});
});

app.post("/post_edit", (req, res) => {
    const postId = parseInt(req.body.id);
    const foundIndex = post_list.findIndex((post) => post.id === postId);
    post_list[foundIndex] = {id: postId, title: req.body.title, description: req.body.description, content: req.body.content};
    res.redirect("/blog");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})