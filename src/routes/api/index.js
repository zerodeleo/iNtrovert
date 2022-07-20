const MODE = process.env.MODE;
const router = require(MODE === 'development' ? './dev' : './prod');

module.exports = router;
