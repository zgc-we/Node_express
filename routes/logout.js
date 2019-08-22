let express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    res.send("退出页面")
})

module.exports = router;