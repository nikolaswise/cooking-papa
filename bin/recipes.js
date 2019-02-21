const fs = require('fs')
const path = process.cwd()
const cb = (err) => {
  if(err) {
    return console.log(err)
  }
  console.log("The file was saved!")
}

module.exports = function (site, cb) {
  let recipes = site.map(page => {
    return {
      "title": page.title,
      "slug": page.url.replace(/\//g, ''),
      "ingredients": page.ingredients,
      "steps": page.steps
    }
  })
  recipes.map(recipe => {
    fs.writeFile(`${path}/data/recipes/${recipe.slug}.json`, JSON.stringify(recipe), cb)
  })
  fs.writeFile(`${path}/data/index.json`, JSON.stringify(recipes), cb)


  cb(null, site)
}