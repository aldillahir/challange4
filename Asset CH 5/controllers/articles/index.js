const router = require("express").Router()

// -- route untuk API
router.post("/", require('./create'))
router.get("/", require('./list'))
router.get("/:id", require('./detail'))
router.put("/:id", require('./update'))
router.delete("/:id", require('./delete'))



module.exports = router
