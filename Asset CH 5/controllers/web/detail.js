const ArticleService = require("../../services/article_service")


module.exports = (req, res) => {
  const id = req.params.id;

  const as = new ArticleService();
  const article = as.detail(id)
  res.render("detail", {
    article: article
  })
}
