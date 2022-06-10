module.exports = {
    index: async (req, res) => {
        const name = "Doe";
        const Title = "judul";
        return res.render("index", { name, Title });
    },
};
