const MODE = process.env.MODE;
const router = require(
  MODE === 'development' ?
  './dev' :
  './dev'); // prod not implemented, use dev instead

module.exports = router;
