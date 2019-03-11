const item = (object) => (`
<div>
  <a href="${object.slug}">${object.title} ${object.date}</a>
</div>
`)

export const list = (array) => `${array.map(item)}`
