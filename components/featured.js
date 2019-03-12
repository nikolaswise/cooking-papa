export const featured = (object) => (`
<div class="featured">
  <a class="featured-link" href="${object.slug}">
    <h2 class="featured-title">
      ${object.title}
    </h2>
    <date class="featured-date">
      ${object.date}
    </date>
  </a>
</div>

<link rel="stylesheet" href="/css/components/featured.css">
`)