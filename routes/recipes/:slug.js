import { illo } from '../../components/recipe-illo.js'
import { recipe } from '../../components/recipe-main.js'
import back from '../../components/back-nav.js'
import recipeNav from '../../components/recipe-nav.js'

const template = (object) => (`
<article>
${back}

<section>
  ${illo(object)}
</section
<section>
  ${recipe(object)}
</section

${recipeNav}
</article>
`)

const data = (slug, root = '/') => async () => {
  console.log('rendering!', `${root}data/recipes/${slug}.json`)
  const response = await fetch(`${root}data/recipes/${slug}.json`)
  const obj = await response.json()
  return obj
}

export const main = async (slug, root = '/') => {
  let obj = await data(slug, root)()
  return template(obj)
}
