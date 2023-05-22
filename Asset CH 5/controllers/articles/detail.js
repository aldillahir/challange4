const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  const {id } = req.params

  const as = new ArticleService()
  const detail = as.detail(id)

  res.json({
    message: "detail article",
    data: detail
  })
}
