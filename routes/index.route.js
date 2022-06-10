const indexController = require("../controllers/index.controller");
const postController = require("../controllers/post.controller");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", indexController.index);

router.get("/post", postController.index);
router.get("/post/create", postController.create);
router.post("/post/store", postController.store);

module.exports = router;
