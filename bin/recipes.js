const fs = require('fs')
const path = process.cwd()

const fsErr = (err) => {
  if(err) {
    return console.log(err)
  }
}

const writeData = (recipe) => {
  fs.writeFile(`${path}/data/recipes/${recipe.slug}.json`, JSON.stringify(recipe), fsErr)
}

const writeIndexData = (recipes) => {
  fs.writeFile(`${path}/data/index.json`, JSON.stringify(recipes), fsErr)
}

const recipeData = (site) => {
  let recipes = site.map(page => {
    return {
      "title": page.title,
      "slug": page.url.replace(/\//g, ''),
      "ingredients": page.ingredients,
      "steps": page.steps
    }
  })
  recipes.map(recipe => writeData(recipe))
  writeIndexData(recipes)
}

module.exports = function (site, cb) {
  recipeData(site)
  cb(null, site)
}