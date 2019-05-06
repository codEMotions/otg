const express = require("express");
const router = express.Router();

//item Model
const Record = require("../../models/Record");

//@route Get api/items
router.get("/", (req, res) => {
  Record.find()
    .sort({ date: -1 })
    .then(record => res.json(record));
});

//@route Get api/items
router.post("/", (req, res) => {
  const newRecord = new Record({
    team1: req.body.team1,
    team2: req.body.team2,
    gameType: req.body.gameType,
    score1: req.body.score1,
    score2: req.body.score2
  });
  newRecord.save().then(record => res.json(record));
});

//@route Get api/items
router.delete("/:id", (req, res) => {
  Record.findById(req.params.id)
    .then(record => record.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
