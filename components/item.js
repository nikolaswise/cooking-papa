const render = (object) => (`
<h1>${object.title}</h1>
<h2>Ingredients</h2>
<ul>
  ${object.ingredients.map(string => `<li>${string}</li>`)}
</ul>
<h2>Cooking</h2>
<ol>
  ${object.steps.map(string => `<li>${string}</li>`)}
</ol>
`)

export default render