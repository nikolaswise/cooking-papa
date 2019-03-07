require = require("esm")(module)
require('isomorphic-fetch')
const fs = require('fs')
const path = process.cwd()
const layout = require('../layouts/layout.js')

const render = async (page) => {
  let index = `${path}/routes${page.url}index.js`
  let single = `${path}/routes${page.url.substring(0, page.url.length -1)}.js`
  let slug = `${path}/routes${page.url.split('/').slice(0,-2).join('/')}/:slug.js`

  try {
    if (fs.existsSync(`${index}`)) {
      let indexTemplate = require(`${index}`)
      let indexMain = await indexTemplate.main(`http://localhost:5000/`)
      page.content = layout.default(indexMain)
    }
    // Implement this later when I have one
    // if (fs.existsSync(`${single}`)) {
      // let rootTemplate = require(`${single}`)
      // let id = page.url.substring(0, page.url.length -1)
      // template(id)
    // }
    if (fs.existsSync(`${slug}`)) {
      let id = page.url.split('/').slice(0,-1).pop()
      let slugTemplate = require(`${slug}`)
      let slugMain = await slugTemplate.main(id, `http://localhost:5000/`)
      page.content = layout.default(slugMain)

    }
  } catch(err) {
    console.error(err)
  }
  return page
}

module.exports = function (site, cb) {
  let buildSite = site.map(async page => {
    let html = await render(page)
    return html
  })
  Promise.all(buildSite)
    .then((newSite) => {
      cb(null, newSite)
    })
    .catch((err) => new Error(err))
}