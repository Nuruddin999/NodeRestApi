const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
    res.status(200).json({message: "handling GET tasks list"})
});
router.post("/", (req, res, next) => {
    const task = {
        date: req.body.date,
        type: req.body.type,
        name: req.body.name,
        descrShort: req.body.descrShort,
        category: req.body.category,
        descrDetailed: req.body.descrDetailed,
        address: req.body.address,
        telephone: req.body.telephone,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startAddress: req.body.startAddress,
        endAddress: req.body.endAddress,
        taskFlowShort: req.body.taskFlowShort,
        taskFlowDetailed: req.body.taskFlowDetailed
    };
    res.status(200).json({task:task})
});
router.get("/:id", (req, res, next) => {
    res.status(200).json({message: "handling GET single tas     list"})
});
router.patch("/:id", (req, res, next) => {
    res.status(200).json({message: "updated task "})
});
router.delete("/:id", (req, res, next) => {
    res.status(200).json({message: "deleted task "})
});
module.exports = router;