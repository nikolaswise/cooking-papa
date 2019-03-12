export const recipe = (object) => `
<div class="recipe">
  <date class="recipe-date">${object.date}</date>
  <h1 class="recipe-title">${object.title}</h1>
  <div class="recipe-ingredients">
    <h2 class="recipe-ingredients-title">Ingredients</h2>
    <ul class="recipe-ingredients-list">
      ${object.ingredients.map(string => `<li class="recipe-ingredients-list-item">${string}</li>`).join(" ")}
    </ul>
  </div>
  <div class="recipe-steps">
    <h2 class="recipe-steps-title">Cooking</h2>
    <ol class="recipe-steps-list">
      ${object.steps.map(string => `<li class="recipe-steps-list-item">${string}</li>`).join(" ")}
    </ol>
  </div>
</div>

<link rel="stylesheet" href="/css/components/recipe.css">
`