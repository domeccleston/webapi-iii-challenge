const express = require('express');
const userDb = require('./userDb');
const postDb = require('../posts/postDb');
const router = express.Router();

router.post('/', (req, res) => {
    const newUser = req.body;
    userDb.insert(newUser)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.post('/:id/posts', (req, res) => {
    const { id } = req.params;
    const newPost = req.body;
    // come back to this
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
    console.log("received a delete request")
    const { id } = req.params;
    userDb.remove(id)
        .then(user => {
            res.status(200).json("User deleted");
        })  
        .catch(err => {
            res.status(500).json(`Error removing the user: ${err.message}`)
        })
});

router.put('/:id', (req, res) => {
    console.log("received request to update user details")
    const { id } = req.params;
    userDb.update(id, req.body)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json(user)
            }
        })
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
