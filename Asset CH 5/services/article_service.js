// const ARTICLE_JSON_PATH = "../data/article.json"
const fs = require("fs")
const path = require("path")
const ARTICLE_JSON_PATH = path.join(__dirname, "../data/article.json")

class ArticleService {
  #articleJson

  constructor() {
    this.#articleJson = this.readFile()
  }

  create(title, content) {
    const newArticle = {
      id: this.#articleJson.length + 1,
      title: title,
      content: content,
    }

    this.#articleJson.push(newArticle)
    this.writeFile()
  }

  update(id, {title, content}) {
    const articleFoundIndex = this.findArticleIndexById(id)
    this.#articleJson[articleFoundIndex].title = title
    this.#articleJson[articleFoundIndex].content = content
    this.writeFile()
  }

  list() {
    return this.#articleJson
  }

  detail(id) {
    const articleFoundIndex = this.findArticleIndexById(id)
    return this.#articleJson[articleFoundIndex]
  }

  delete(id) {
    const articleFoundIndex = this.findArticleIndexById(id)
    this.#articleJson.splice(articleFoundIndex, 1);
    this.writeFile()
  }

  findArticleIndexById(id) {
    return this.#articleJson.findIndex(article => {
      return article.id == id
    })
  }


  writeFile() {
    fs.unlinkSync(ARTICLE_JSON_PATH)
    fs.writeFileSync(ARTICLE_JSON_PATH, JSON.stringify(this.#articleJson))
  }

  readFile() {
    const articleRaw = fs.readFileSync(ARTICLE_JSON_PATH, "utf-8")
    const articleJson = JSON.parse(articleRaw) || []
    return articleJson
  }

}


module.exports = ArticleService
