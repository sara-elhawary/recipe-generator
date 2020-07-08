const button = document.getElementById("get_meal");
const meal_area = document.getElementById("meal");

//**********GETTING RANDOM MEAL**************//

button.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

//getting ingredients and mesaures

const createMeal = (meal) => {
  let ingredients = [];
  //for up to 20 ingredients
  for (let i = 1; i < 20; i++) {
    if (meal[`strIngredient1${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  //*********DISPLAYING RECIPE INFO */
  const newInnerHTML = `
    <div class="row">
        <div class="columns five >
            <img src="${meal.strMealThumb}" alt="Meal Image">

            ${
              meal.strArea
                ? `<p><strong>Category:</strong>${meal.strArea}</p>`
                : ""
            }
            ${
              meal.strTags
                ? `<p><strong>Category:</strong>${meal.strTags
                    .split(",")
                    .join(",")}</p>`
                : ""
            }
            <h5>Ingredients</h5>
            <ul>
            ${ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
            </ul>
        </div>
        <div class="columns seven>
            <h4>${meal.strMeal}</h4>
            <p>${meal.strInstructions}</p>
        </div>
    </div>
    ${
      meal.strYoutube
        ? `
    <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
                <iframe width="420 height="315"
                src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}">
                </iframe>

            </div>

    </div>`
        : ""
    }

    `;
  meal_area.innerHTML = newInnerHTML;
};
