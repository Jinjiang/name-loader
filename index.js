var loaderUtils = require("loader-utils")

module.exports = function(content) {
  this.cacheable && this.cacheable()
  var query = loaderUtils.parseQuery(this.query)
  var url = loaderUtils.interpolateName(this, query.name || "[path][name].[ext]", {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  })
  return "module.exports = __webpack_public_path__ + " + JSON.stringify(url)
}

module.exports.raw = true
