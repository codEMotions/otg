const express = require("express");
const router = express.Router();

//item Model
const Gameleague = require("../../models/Gameleague");

//@route Get api/items
router.get("/", (req, res) => {
  Gameleague.find()
    .sort({ date: -1 })
    .then(gameleagues => res.json(gameleagues));
});

//@route Get api/items
router.post("/", (req, res) => {
  const newGameleague = new Gameleague({
    team1: req.body.team1,
    team2: req.body.team2,
    leagueName: req.body.leagueName,
    gameType: req.body.gameType,
    score1: req.body.score1,
    score2: req.body.score2
  });
  newGameleague.save().then(gameleague => res.json(gameleague));
});

//@route Get api/items
router.delete("/:id", (req, res) => {
  Gameleague.findById(req.params.id)
    .then(gamesleague => gamesleague.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
