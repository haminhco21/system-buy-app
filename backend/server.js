const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHander = require("./middleWare/errorMiddleWare");
const cookieParser  = require("cookie-parser");
const path = require("path");

const app = express()

const PORT = process.env.PORT || 5000

//Middlewares
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Middlewares
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

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
            console.log(`Chay vao tim em tren PORT ${PORT}`);
        })
    })
    .catch((err) => {
        console.error(err);
    })