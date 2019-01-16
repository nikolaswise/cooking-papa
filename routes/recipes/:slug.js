import render from '../../js/renderer'

const get = async () => {
  let slug = window.location.pathname.split('/')[2]
  const response = await fetch(`/data/recipes/${slug}.json`)
  const json = await response.json()
  return json
}

const data = await get()

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

export default render(template, data)