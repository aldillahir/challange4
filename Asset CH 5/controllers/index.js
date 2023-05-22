module.exports = (app) => {
  app.use("/", require("./web"))
  app.use("/articles", require("./articles"))
}
