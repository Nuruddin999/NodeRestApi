const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const vlolunteersRoutes = require("./api/routes/volunteers");
const tasksRoutes = require("./api/routes/tasks");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nuruddin:fillmongodbb999@cluster0-1zgth.mongodb.net/test?retryWrites=true&w=majority", {
    useMongoClient: true
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Request-With,Content-Type,Accept,Authorization", {useNewUrlParser: true})
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET")
        return res.status(200).json()
    }
    next()
});
app.use("/volunteers", vlolunteersRoutes);
app.use("/tasks", tasksRoutes);
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message})
});

module.exports = app;