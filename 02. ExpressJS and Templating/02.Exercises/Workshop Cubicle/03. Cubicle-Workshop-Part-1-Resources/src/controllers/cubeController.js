const router = require("express").Router();
const cubeServices = require("../services/cubeService");

router.get("/create", (req, res) => {
  // res.render("index")
  // res.send('Hello from cubes')
  console.log(cubeServices.getAll());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeServices.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

module.exports = router;
