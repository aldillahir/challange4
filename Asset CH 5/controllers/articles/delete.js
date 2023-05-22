const ArticleService = require("../../services/article_service")

module.exports = (req, res) => {
  // get id from route params
  const { id } = req.params

  // delete article by id in article service
  const as = new ArticleService()
  as.delete(id)

  res.json({
    message: "successfuly deleting  article"
  })
}
