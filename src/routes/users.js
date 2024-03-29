const { Router } = require('express');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const router = new Router();

router.route(`/:uid`).get(async (req, res) => {
  const { uid } = req.params;
  User.findOne({ uid })
      .then((data) => {
        if (data) {
          res.json({ uid: data.uid, username: data.username });
        } else {
          throw new Error('go hack yourself');
        }
      })
      .catch((err) => res.status(418).json(err.message));
});

router.route('/:uid').put(async (req, res) => {
  const { uid } = req.params;
  const { password } = req.body;
  const username = req.body.username.toLowerCase();
  const userCheck = await User.findOne({ username });

  try {
    if (userCheck && userCheck.uid !== uid ) {
      throw new Error('Username is taken');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);
    User.findOneAndUpdate({ uid }, { username, password: hashedPw })
        .then(() => res.status(201).json({ username }))
        .catch((err) => res.status(500).json(err.message));
  } catch (err) {
    res.status(401).json(err.message).end();
  }
});

router.route(`/signin/`).post(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return res.json({ uid: user.uid, username: user.username });
    }
  }

  const err = new Error('Wrong username or password');
  res.status(401).json(err.message);
});

router.route(`/signup/`).post(async (req, res) => {
  const { password } = req.body;
  const username = req.body.username.toLowerCase();
  const uid = uuidv4();

  User.findOne({ username })
      .then(async (data) => {
        if (data) {
          throw new Error('User already exist');
        } else {
          const newUser = new User({ uid, username, password });
          const salt = await bcrypt.genSalt(10);
          newUser.password = await bcrypt.hash(newUser.password, salt);
          newUser.save()
              .then(() => res.status(201).json({ uid, username }))
              .catch((err) => res.status(401).json(err.message));
        }
      })
      .catch((err) => res.status(400).json(err.message));
});

router.route('/:uid').delete((req, res) => {
  const { uid } = req.params;
  User.findOneAndDelete({ uid })
      .then(() => res.status(204).send())
      .catch((err) => res.status(500).json('internal server error'));
});

router.route('/preferences/:uid').put((req, res) => {
  const { preferences } = req.body;
  const { uid } = req.params;
  User.findOneAndUpdate({ uid }, { preferences })
      .then(() => res.status(201).json())
      .catch((err) => res.status(500).json(err.message));
});

router.route('/preferences/:uid').get((req, res) => {
  const { uid } = req.params;
  User.findOne({ uid })
      .then((data) => res.status(200).json(data.preferences))
      .catch((err) => res.status(500).json(err.message));
});

router.route('/favourites/:uid').get((req, res) => {
  const { uid } = req.params;
  User.findOne({ uid })
      .then((data) => res.status(200).json(data.favourites))
      .catch((err) => res.status(500).json(err.message));
});

router.route('/favourites/:uid').put((req, res) => {
  const { favourites } = req.body;
  const { uid } = req.params;
  User.findOneAndUpdate({ uid }, { favourites })
      .then(() => res.status(201).json())
      .catch((err) => res.status(500).json(err.message));
});

module.exports = router;
