require = require("esm")(module)
require('isomorphic-fetch')
const fs = require('fs')
const path = process.cwd()

const render = async (page) => {
  console.debug(`dis page:`, page.url)
  let index = `${path}/routes${page.url}index.js`
  let single = `${path}/routes${page.url.substring(0, page.url.length -1)}.js`
  let slug = `${path}/routes${page.url.split('/').slice(0,-2).join('/')}/:slug.js`

  try {
    if (fs.existsSync(`${index}`)) {
      // template = require(`${index}`)
      // template('index.js')
    }
    if (fs.existsSync(`${single}`)) {
      // template = require(`${single}`)
      // let id = page.url.substring(0, page.url.length -1)
      // template(id)
    }
    if (fs.existsSync(`${slug}`)) {
      let id = page.url.split('/').slice(0,-1).pop()
      let template = require(`${slug}`)
      let content = await template.default(id, `http://localhost:5000/`)
      page.content = content
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
      console.log(newSite)
      cb(null, newSite)
    })
    .catch((err) => new Error(err))
}