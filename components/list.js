const item = (object) => (`
  <a class="list-link" href="${object.slug}">
    <span class="list-title">
      ${object.title}
    </span>
    <span class="list-date">
      ${object.date}
    </span>
  </a>
`)

export const list = (array) => `
<div class="list">
  ${array.map(item)}
</div>

<link rel="stylesheet" href="/css/components/list.css">

`
