const item = (object) => (`
<li>
  <a href="/${object.slug}">${object.title}</a>
</li>
`)

const render = (array) => (`
<h1>Cooking Papa</h1>
<ul>
  ${array.map(item)}
</ul>
`)

export default render