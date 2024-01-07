document.getElementById('searchButton').addEventListener('click', function() {
    const ingredient = document.getElementById('ingredientInput').value;
    fetchRecipes(ingredient);
  });
  
  function fetchRecipes(ingredient) {
    const appId = '14c41d78';
    const appKey = '0d75f66ee04724ed4f7823b870d227f0';
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.hits);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';

    recipes.forEach(recipeItem => {
        const recipe = recipeItem.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-card');
        recipeElement.innerHTML = `
            <h3>${recipe.label}</h3>
            <img src="${recipe.image}" alt="${recipe.label}">
            <a href="${recipe.url}" target="_blank">View Full Recipe</a>`; // Adjust based on response structure
        recipesDiv.appendChild(recipeElement);
    });
}

