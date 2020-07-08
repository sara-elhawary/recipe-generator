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
  let ingerdients = [];
  //for up to 20 ingredients
  for (let i = 0; i < 20; i++) {
    if (meal[`strIngredient1${i}`]) {
      ingerdients.push(
        `${meal[`strIngredient${i}`]}-${meal[`strIngredient${i}`]}`
      );
    } else {
      break;
    }
  }
};

//*********DISPLAYING RECIPE INFO */
