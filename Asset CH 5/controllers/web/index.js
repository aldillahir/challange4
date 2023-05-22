const router = require("express").Router()

router.get("/login", require('./login'))
router.post("/login", require('./login'))
router.get("/", require('./list'))
router.get("/:id", require('./detail'))


module.exports = router
