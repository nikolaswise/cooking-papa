const item = (object) => (`
<li>
  <a href="/${object.slug}">${object.title}</a>
</li>
`)

const template = (array) => (`
<h1>Cooking Papa</h1>
<ul>
  ${array.map(item)}
</ul>
`)

const data = (root = '/') => async () => {
  console.log('rendering!', `${root}data/index.json`)
  const response = await fetch(`${root}data/index.json`)
  const obj = await response.json()
  return obj
}

export const main = async (root = '/') => {
  let obj = await data(root)()
  return template(obj)
}
