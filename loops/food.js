// const searchBtn=document.getElementById('search-btn');
// searchBtn.addEventListener("click",searchMeal);
// async function searchMeal(){
//    const mealInput=document.getElementById('meal-input').value; 
// }
// const resultsDiv=document.getElementById('results');
// resultsDiv.innerHTML="";

// if(!mealIput){
//     resultsDiv.innerHTML="<h3>Please enter a meal name</h3>";
//     return;
// }

// try{
//     const res = await fetch(
//         'https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}',
//       );
//       const searchResult = await res.json();

//       console.log(searchResult);
//       if(!searchResult.meals){
//         resultsDiv.innerHTML="No result found";
//         return;
//       }

//       searchResult.meals.forEach((meal) => {
//         const mealDiv = document.createElement("div");
//         mealDiv.classList.add("meal");
  
//         mealDiv.innerHTML = `
//           <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//           <h2>${meal.strMeal}</h2>
//           <ul>${meal.strInstructions
//             .split("\n")
//             .filter((step) => step.trim() !== "")
//             .map((instruction) => <li>${instruction}</li>)
//             .join("")}</ul>
//             <a href="${meal.strYoutube}">Watch youtube</a>
//             `;
  
          
  
//         resultsDiv.appendChild(mealDiv);
//       });
//     } catch (error) {
//       console.error(error);
//     }
const searchBtn = document.getElementById("search-btn");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", searchMeal);

async function searchMeal() {
  const mealInput = document.getElementById("meal-input").value.trim();

  resultsDiv.innerHTML = "";

  if (!mealInput) {
    resultsDiv.innerHTML = "<h3>Please enter a meal name</h3>";
    return;
  }

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`
    );

    const searchResult = await res.json();

    console.log(searchResult);

    if (!searchResult.meals) {
      resultsDiv.innerHTML = "<h3>No result found</h3>";
      return;
    }

    searchResult.meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal");

      mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

        <h2>${meal.strMeal}</h2>

        <ul>
          ${meal.strInstructions
            .split("\n")
            .filter((step) => step.trim() !== "")
            .map((instruction) => `<li>${instruction}</li>`)
            .join("")}
        </ul>

        <a href="${meal.strYoutube}" target="_blank">
          Watch YouTube
        </a>
      `;

      resultsDiv.appendChild(mealDiv);
    });

  } catch (error) {
    console.error(error);
    resultsDiv.innerHTML = "<h3>Something went wrong. Please try again.</h3>";
  }
}