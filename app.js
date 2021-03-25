const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB connection successful'))
.catch(err => console.log(err));


// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes
app.use(require("./routes/indexRoutes"));
app.use(require("./routes/todoRoutes"));


// server configuration
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));