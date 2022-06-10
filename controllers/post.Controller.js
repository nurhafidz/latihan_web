const Post = require("../models/Post");

module.exports = {
    // fun index
    index: async (req, res) => {
        //Test 2
        //Get All Posts
        const posts = await Post.findAll();
        return res.render("post/index", { posts });
    },
    // test
    create: async (req, res) => {
        return res.render("post/create");
    },
    store: async (req, res) => {
        await Post.create({
            title: req.body.title,
            content: req.body.content,
        });

        return res.redirect("/post");
        // return res.render("post/create");
    },
};
