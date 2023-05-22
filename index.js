const express = require("express")
const app = express()
const PORT  = 5050

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: false}))

require('./Asset CH 5/controllers')(app)

app.listen(PORT, () => {
  console.log('running at port:', PORT)
})
