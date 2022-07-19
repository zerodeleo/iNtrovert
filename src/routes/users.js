const router = require('express').Router();
let User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

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

router.route(`/signin/`).post(async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        console.log(validPassword);
        if (validPassword) {
            return res.json({ uid: user.uid, username: user.username })
        }
    }
    const err = new Error('Wrong username or password');
    res.status(401).json(err.message)
    
});

router.route(`/signup/`).post(async(req, res) => {
    const { username, password } = req.body;
    const uid = uuidv4();

    User.findOne({username})
        .then(async data => {
            if (data) {
                throw new Error ('User already exist');
            } else {
                const newUser = new User({ uid, username, password })
                const salt = await bcrypt.genSalt(10);
                newUser.password = await bcrypt.hash(newUser.password, salt);
                console.log(newUser);

                newUser.save()
                    .then(() => res.status(201).json({ uid, username }))
            }
        })
        .catch(err => res.status(400).json(err.message));
});

module.exports = router;
