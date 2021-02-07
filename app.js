//getting event


document.getElementById('search_button').addEventListener('click', () => {
    const catchName = document.getElementById('mealName').value;


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${catchName}`)
        .then(res => res.json())
        .then(data => showMeal(data));


});


//catch mealId


function mealIngredients(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            displayMealIngredients(data.meals[0]);
        })
}


//showing the meals name by search


const showMeal = data => {
    const mealsDisplayDiv = document.getElementById('mealsDisplay');
    let name = "";
    if (data.meals) {
        data.meals.forEach(meal => {
            name = name + `<div onclick = "mealIngredients('${meal.idMeal}')" class ="design" id="details"><img src = "${meal.strMealThumb}">
            <h4>${meal.strMeal}</h4></div>`;

        });
    }
    else {
        name = "Nothing is Here...Please try again!!!";
    }
    mealsDisplayDiv.innerHTML = name;

}

//show single meal ingredients


const displayMealIngredients = meal => {
    console.log(meal);
    const ingredientsBox = document.getElementById("ingredientsBox");
    ingredientsBox.innerHTML =
        `<div class="ingredients col-md-4 m-auto"> <img src="${meal.strMealThumb}">
<h2> ${meal.strMeal}</h2>
<h4>Ingredients List</h4>
<li>${meal.strMeasure1}${meal.strIngredient1}</li>
<li>${meal.strMeasure2}${meal.strIngredient2}</li>
<li>${meal.strMeasure3}${meal.strIngredient3}</li>
<li>${meal.strMeasure4}${meal.strIngredient4}</li>
<li>${meal.strMeasure5}${meal.strIngredient5}</li>
<li>${meal.strMeasure7}${meal.strIngredient6}</li>
<li>${meal.strMeasure6}${meal.strIngredient7}</li>
<li>${meal.strMeasure7}${meal.strIngredient8}</li> </div>`
        ;

}

