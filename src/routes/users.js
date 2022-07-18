const router = require('express').Router();
let User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

router.route(`/:uid`).get(async(req, res) => {
    const {uid} = req.params;
    console.log(uid);
    User.findOne({uid})
        .then(data => {
            if (data) {
                res.json({ uid: data.uid, username: data.username })
            } else {
                throw new Error("go hack yourself")
            }
        })
        .catch(err => res.status(418).json(err.message))
}); 

router.route(`/signin/`).post((req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then(data => {
            if (data && (data.password === password)) {
                res.json({ uid: data.uid, username })
            } else {
                throw new Error('Wrong username or password')
            }
        })
       .catch(err => res.status(401).json(err.message));
});

router.route(`/signup/`).post((req, res) => {
    const { username, password } = req.body;
    const uid = uuidv4();

    User.findOne({username})
        .then(data => {
            if (data) {
                throw new Error ('User already exist');
            } else {
                const newUser = new User({ uid, username, password })

                newUser.save()
                    .then(() => res.status(201).json({ uid, username }))
            }
        })
        .catch(err => res.status(400).json(err.message));
});

module.exports = router;
