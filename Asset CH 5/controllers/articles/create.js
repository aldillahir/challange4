const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  // dapatkan data dari user request 
  const {title, content} = req.body
  console.log(req.body)

  // insert data ke article service
  const as = new ArticleService();
  as.create(title, content)


  res.json({
    message: "successfuly creating new article"
  })
}
