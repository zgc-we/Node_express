let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.send('注册页面')
})

module.exports = router;