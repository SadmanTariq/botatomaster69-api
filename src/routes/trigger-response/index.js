const express = require("express");
const db = require("../../models");

const router = express.Router();

router.get("/", (req, res) => {
    db.Trigger
        .findAll({ include: {
            model: db.Response,
            as: "responses",
        }})
        .then(triggers => {
            res.json(triggers);
        });
});

exports.router = router;