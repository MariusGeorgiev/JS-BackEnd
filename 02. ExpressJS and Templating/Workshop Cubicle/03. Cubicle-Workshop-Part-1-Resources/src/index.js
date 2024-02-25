const express = require('express');
const handlebars = require("express-handlebars");
const path = require('path')

const app = express()
const PORT = 5050;

// Handlebars config
app.engine("hbs", handlebars.engine({ extname: "hbs"}));
app.set('view engine', 'hbs');
app.set("views", 'src/views');

// Setup static files

//app.use(express.static("src/public"))
// or
//const staticFiles = express.static(path.resolve(__dirname, "public"));
// app.use(staticFiles())

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    // res.send("Hello from express server!")

    res.render("index", )
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));