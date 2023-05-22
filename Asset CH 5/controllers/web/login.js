
const USERNAME = "admin"
const PASSWORD = "admin"

module.exports = (req, res) => {
  console.log(req.method)
  if (req.method == "GET") {
    res.render("login")
    return
  } 

  if (req.method == "POST") {
    const {username, password} = (req.body)
    if (username == USERNAME && password == PASSWORD) {
      res.send("login berhasil")
    } else {
      res.send("login gagal")
    }
  }
}
