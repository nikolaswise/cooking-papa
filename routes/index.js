import { featured } from '../components/featured.js'
import { list } from '../components/list.js'

const dateSort = (a, b) => {
  a = new Date(a.date);
  b = new Date(b.date);
  return a>b ? -1 : a<b ? 1 : 0;
}

const template = (array) => {
  let recipes = array
    .filter(obj => obj.ingredients)
    .sort(dateSort)
  console.log(recipes)
  return `
<h1>Cooking Papa</h1>
<section>
  <p>qwertyuiopasdfghjklzxcvbnmmqwertyuiopasdfghjklzxcvbnmm</p>
  <p>qwertyuiopasdfghjklzxcvbnmmqwertyuiopasdfghjklzxcvbnmmqwertyuiopasdfghjklzxcvbnmm</p>
</section>
<section>
  ${featured(recipes.shift())}
</section>
<section>
  ${list(recipes)}
</section>
`}

const data = (root) => async () => {
  console.log(root)
  console.log('rendering!', `${root}data/index.json`)
  const response = await fetch(`${root}data/index.json`)
  const obj = await response.json()
  return obj
}

export const main = async (id, root = '/') => {
  console.log(id, root)
  let obj = await data(root)()
  return template(obj)
}
