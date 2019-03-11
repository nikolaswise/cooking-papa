const fs = require('fs')
const path = process.cwd()

const fsErr = (err) => {
  if(err) {
    return console.log(err)
  }
}

const writeData = (recipe) => {
  fs.writeFile(`${path}/data${recipe.slug}.json`, JSON.stringify(recipe), fsErr)
}

const writeIndexData = (recipes) => {
  fs.writeFile(`${path}/data/index.json`, JSON.stringify(recipes), fsErr)
}

const recipeData = (site) => {
  let recipes = site.map(page => {
    return {
      "title": page.title,
      "date": page.date,
      "slug": page.url.substring(0, page.url.length - 1),
      "ingredients": page.ingredients,
      "steps": page.steps,
      "content": page.content
    }
  })
  recipes.map(recipe => writeData(recipe))
  writeIndexData(recipes)
}

module.exports = function (site, cb) {
  recipeData(site)
  cb(null, site)
}