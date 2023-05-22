const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  const as = new ArticleService()
  const listArticles = as.list()

  res.render("index", {
    articles: listArticles
  })
}
