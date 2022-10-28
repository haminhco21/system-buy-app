const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHander = require("./middleWare/errorMiddleWare");
const cookieparser = require("cookie-parser")

const app = express()

const PORT = process.env.PORT || 5000

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes Middlewares
app.use("/api/users", userRoute)

//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
});

//Error MiddleWare
app.use(errorHander);

//Connect to DB and start server

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Runing  on PORT ${PORT}`);
        })
    })
    .catch((err) => {
        console.error(err);
    })