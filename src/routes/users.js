const router = require('express').Router();
let User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

router.route(`/:uid`).get(async(req, res) => {
    const { uid } = req.params;
    console.log(uid);
    User.find({ uid })
        .then(data => {
            if (data.length === 0) {
                throw Error('user does not exist');
            } else {
                res.json(data[0]);
            }
        })
        .catch(err => res.status(400).json(err.message));
});

router.route(`/signin/`).post((req, res) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    User.find({ username })
        .then(data => {
            if (data.length === 0) {
                throw Error('wrong username')
            } else if (data.length > 0 && data[0].password === password) {
                res.json(data[0]);
                return;
            } else {
                throw Error('wrong password');
            }
        })
        .catch(err => res.status(400).json(err.message));
});

module.exports = router;
