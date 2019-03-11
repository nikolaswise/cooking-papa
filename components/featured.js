export const featured = (object) => (`
<a href="${object.slug}">
  <h2>
    ${object.title}
  </h2>
  <date>
    ${object.date}
  </date>
</a>
`)