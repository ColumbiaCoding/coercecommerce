const router = require("express").Router();
const {BlogPost, Comments, Users} = require("../models");

//need to create more 
router.get("/", (req, res) => {
    res.render("homepage")
})

module.exports = router