let express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    res.send('这是login页面')
})

module.exports = router;