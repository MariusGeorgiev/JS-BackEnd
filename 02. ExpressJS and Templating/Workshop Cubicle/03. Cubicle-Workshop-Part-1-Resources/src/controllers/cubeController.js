const router = require("express").Router()

router.get('/create', (req, res) => {
    // res.render("index")
    // res.send('Hello from cubes')
    res.render("create")
});

module.exports = router;
