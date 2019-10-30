const express = require('express');
const userDb = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    console.log("Reached users API")
    userDb.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/:id', (req, res) => {
    console.log("Received a request for a user ID")
    const { id } = req.params
    userDb.getById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json("User not found")
            }
        })
        .catch(err => {
            res.status(500).json(error);
        })
});

router.get('/:id/posts', (req, res) => {
    console.log("received request for user posts")
    const { id } = req.params;
    userDb.getUserPosts(id)
        .then(userPosts => {
            if(userPosts.length > 1) {
                res.status(200).json(userPosts);
            } else {
                res.status(404).json("No posts found for that user.");
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
