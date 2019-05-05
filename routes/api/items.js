const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//item Model
const Item = require('../../models/Item');

//@route Get api/items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

//@route Get api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        favoritesport: req.body.favoritesport
    });
    newItem.save().then(item => res.json(item));
});

//@route Get api/items
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json( { success: true })))
        .catch(err => res.status(404).json( { success: false } ))
})

module.exports = router;