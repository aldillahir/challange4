const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  const {id} = req.params
  const {title, content} = req.body

  const as = new ArticleService()
  as.update(id, {title, content})

  res.json({
    message: "successfuly updating  article"
  })
}
