const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  const as = new ArticleService()

  res.json({
    message: "list articles",
    data: as.list()
  })
}
