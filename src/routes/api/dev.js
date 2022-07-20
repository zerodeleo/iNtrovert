const { Router } = require('express');
const { getDbDocById, getDbDocByName } = require('../../db');

require('dotenv').config();

const router = new Router();

router.route(`/parks/`).get(async (req, res) => {
  const config = {
    dbName: 'googleApi',
    dbCol: 'parks',
    name: 'Axel Landquists Park',
  };
  await getDbDocByName(config).then((data) => res.json(data));
});

router.route(`/parks/:id`).get(async (req, res) => {
  const { id } = req.params;

  const config = {
    dbName: 'googleApi',
    dbCol: 'parks',
    id,
  };

  await getDbDocById(config).then((data) => {
    res.json(data);
  });
});

module.exports = router;
