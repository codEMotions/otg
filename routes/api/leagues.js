const express = require("express");
const router = express.Router();

//item Model
const League = require("../../models/League");

//@route Get api/items
router.get("/", (req, res) => {
  League.find()
    .sort({ date: -1 })
    .then(leagues => res.json(leagues));
});

//@route Get api/items
router.post("/", (req, res) => {
  const newLeague = new League({
    leagueName: req.body.leagueName,
    gameType: req.body.gameType,
    numberTeams: req.body.numberTeams,
    teamName1: req.body.teamName1,
    teamName2: req.body.teamName2,
    teamName3: req.body.teamName3,
    teamName4: req.body.teamName4,
    teamName5: req.body.teamName5,
    teamName6: req.body.teamName6,
    teamName7: req.body.teamName7,
    teamName8: req.body.teamName8,
    teamName9: req.body.teamName9,
    teamName10: req.body.teamName10
  });
  newLeague.save().then(league => res.json(league));
});

//@route Get api/items
router.delete("/:id", (req, res) => {
  League.findById(req.params.id)
    .then(league => league.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
