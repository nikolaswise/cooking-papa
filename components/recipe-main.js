export const recipe = (object) => `
<h1>${object.title}</h1>
<h2>Ingredients</h2>
<ul>
  ${object.ingredients.map(string => `<li>${string}</li>`).join(" ")}
</ul>
<h2>Cooking</h2>
<ol>
  ${object.steps.map(string => `<li>${string}</li>`).join(" ")}
</ol>
`