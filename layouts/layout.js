import nav from '../components/nav.js'

export default (main) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Cooking Papa | Not A Food Blog</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    ${nav}
    <section data-region="main">
      ${main}
    </section>
    <section class="region-foot"></section>
    <script src="/js/event.js" type="module"></script>
    <script src="/js/bus.js" type="module"></script>
    <script src="/js/app.js" type="module"></script>
  </body>
</html>
`