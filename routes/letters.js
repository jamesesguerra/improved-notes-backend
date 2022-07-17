const express = require('express');
const router = express.Router();
const { format } = require('date-fns');

const Letter = require('../models/letters');

// get
router.get('/', (req, res) => {

    Letter.find({})
        .then(result => {
        res.json(result);
        })
})

// get one letter



// post
router.post('/', (req, res) => {
    const letter = new Letter({
        senderName: req.body.senderName,
        recipientName: req.body.recipientName,
        message: req.body.message,
        date: format(new Date(), 'MM/dd/yyyy')
    })

    letter
        .save()
        .then(savedLetter => res.json(savedLetter))
        .catch(err => console.log(error))
})


// update
router.put('/:id', (req, res) => {
    const letter = {
        senderName: req.body.senderName,
        recipientName: req.body.recipientName,
        message: req.body.message,
    }

    Letter.findByIdAndUpdate(req.params.id, letter, { new: true })
        .then(updatedLetter => {
            res.json(updatedLetter);
        })
        .catch(err => console.log(err));
})


// delete
router.delete('/:id', (req, res) => {
    Letter.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end();
        })
        .catch(err => console.log(err))
})


module.exports = router;