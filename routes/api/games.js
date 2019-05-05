const express = require('express');
const router = express.Router();

//item Model
const Game = require('../../models/Game');

//@route Get api/games
router.get('/', (req, res) => {
    Game.find()
        .sort({ date: -1 })
        .then(games => res.json(games))
});

//@route Get api/items
router.post('/', (req, res) => {
    const newGame = new Game({
        gameAuthor: req.body.gameAuthor,
        gameType: req.body.gameType,
        team1: req.body.team1,
        team2: req.body.team2,
        team1score: req.body.team1score,
        team2score: req.body.team2score,
        numberplayers: req.body.numberplayers,
        team1player1: req.body.team1player1,
        team1player2: req.body.team1player2,
        team1player3: req.body.team1player3,
        team1player4: req.body.team1player4,
        team1player5: req.body.team1player5,
        team2player1: req.body.team2player1,
        team2player2: req.body.team2player2,
        team2player3: req.body.team2player3,
        team2player4: req.body.team2player4,
        team2player5: req.body.team2player5,
        gameLive: req.body.gameLive
    });
    newGame.save().then(game => res.json(game));
});

router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, { team1score: req.body.team1score,
         team2score: req.body.team2score,
        gameLive: req.body.gameLive }, {new: true}, (err, game) => {
        if(err) return res.status(500).send(err);
        return res.send(game)
    })

    // Game.findById(req.params.id)
    //     .then(game => game.update(
    //         { team1score: req.body.team1score,
    //             team2score: req.body.team2score }))
    //             .then(() => res.json( { success: true }))
        
    
});

//@route Get api/items
router.delete('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then(game => game.remove().then(() => res.json( { success: true })))
        .catch(err => res.status(404).json( { success: false } ))
})

module.exports = router;