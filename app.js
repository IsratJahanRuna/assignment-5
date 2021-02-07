//getting event


document.getElementById('search_button').addEventListener('click', () => {
    const catchName = document.getElementById('mealName').value;


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${catchName}`)
        .then(res => res.json())
        .then(data => showMeal(data));


});


//showing the meals name by search


const showMeal = data => {
    const mealsDisplayDiv = document.getElementById('mealsDisplay');
    let name = "";
    if (data.meals) {
        data.meals.forEach(meal => {
            name = name + `<div class ="design"><img src = "${meal.strMealThumb}">
            <h4>${meal.strMeal}</h4></div>`;

        });

    }
    else {
        name = "Nothing is Here...Please try again!!!";
    }
    mealsDisplayDiv.innerHTML = name;

}