const express = require('express');
const router = express.Router();

//item Model
const Profile = require('../../models/Profile');

//@route Get api/Profiles
router.get('/', (req, res) => {
    Profile.find()
        .sort({ date: -1 })
        .then(profiles => {
            res.json(profiles)
            
        } )
});

//@route Get api/items
router.post('/', (req, res) => {
    const newProfile = new Profile({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        displayname: req.body.displayname,
        favoritesport: req.body.favoritesport,
        silverstar: req.body.silverstar,
        goldenstar: req.body.goldenstar
    });
    newProfile.save().then(profile => res.json(profile));

});

//@route Get api/items
router.delete('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then(profile => profile.remove().then(() => res.json( { success: true })))
        .catch(err => res.status(404).json( { success: false } ))
})

module.exports = router;