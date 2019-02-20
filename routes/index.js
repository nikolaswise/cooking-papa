import render from '../js/renderer'

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

const get = async () => {
  const response = await fetch(`/data/index.json`)
  const json = await response.json()
  return json
}

const data = await get()

export default render(template, data)