const Post = require("../models/Post");

module.exports = {
    // fun index
    index: async (req, res) => {
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

    // this function for edit page
    edit: async (req, res) => {
        // this for get id from paramereter url
        const id = req.params.id;

        // this for get data form database with id
        const post = await Post.findByPk(id);

        return res.render("post/edit", { post });
    },

    // this function for update page
    update: async (req, res) => {
        const id = req.params.id;

        // this for update data to database with id
        await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        return res.redirect("/post");
    },

    // this function for delete data
    destroy: async (req, res) => {
        const id = req.params.id;

        // this for delete field in database using id
        await Post.destroy({
            where: {
                id: id,
            },
        });

        return res.redirect("/post");
    },
};
