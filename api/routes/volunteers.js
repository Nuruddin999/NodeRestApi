const express = require("express");
const router = express.Router();
const Volunteer = require("../../Models/Vlolunteer");
const mongoose = require("mongoose");
router.get("/", (req, res, next) => {
    res.status(200).json({message: "handling GET volunteers list"})
});
router.post("/", (req, res, next) => {
    const volunteer = new Volunteer({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        midname: req.body.midname,
        lastname: req.body.lastname,
        telephone: req.body.telephone,
        address: req.body.address,
        finishedtasks: req.body.finishedtasks
    });
    volunteer.save().then(result => console.log(result)).catch(error => {
        console.log(error)
    });
    res.status(201).json({volunteer: volunteer})
});
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    Volunteer.findById(id).exec().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({error: error});
    });
});
router.patch("/:id", (req, res, next) => {
    res.status(200).json({message: "updated volunteer "})
});
router.delete("/:id", (req, res, next) => {
    res.status(200).json({message: "deleted volunteer "})
});
module.exports = router;