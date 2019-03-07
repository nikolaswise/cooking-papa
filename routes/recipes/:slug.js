const template = (object) => (`
<h1>${object.title}</h1>
<h2>Ingredients</h2>
<ul>
  ${object.ingredients.map(string => `<li>${string}</li>`).join(" ")}
</ul>
<h2>Cooking</h2>
<ol>
  ${object.steps.map(string => `<li>${string}</li>`).join(" ")}
</ol>
`)

const data = (slug, root = '/') => async () => {
  console.log('rendering!', `${root}data/recipes/${slug}.json`)
  const response = await fetch(`${root}data/recipes/${slug}.json`)
  const obj = await response.json()
  return obj
}

const render = async (slug, root) => {
  let obj = await data(slug, root)()
  return template(obj)
}

export default render
