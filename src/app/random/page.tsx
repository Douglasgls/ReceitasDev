import Image from "next/image";

const meal = {
  idMeal: "52854",
  strMeal: "Pancakes",
  strCategory: "Dessert",
  strArea: "American",
  strInstructions:
    "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling.",
  strMealThumb: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
  strTags: "Breakfast,Desert,Sweet,Fruity",
  strYoutube: "https://www.youtube.com/watch?v=LWuuCndtJr0",
  strIngredients: [
    { ingredient: "Flour", measure: "100g" },
    { ingredient: "Eggs", measure: "2 large" },
    { ingredient: "Milk", measure: "300ml" },
    { ingredient: "Sunflower Oil", measure: "1 tbls" },
    { ingredient: "Sugar", measure: "to serve" },
    { ingredient: "Raspberries", measure: "to serve" },
    { ingredient: "Blueberries", measure: "to serve" },
  ],
  strSource: "https://www.bbcgoodfood.com/recipes/2907669/easy-pancakes",
};

export default function MealCard() {
  return (
    <div className="max-w-lg bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{meal.strMeal}</h2>
        <p className="text-sm text-gray-600">{meal.strCategory} • {meal.strArea}</p>
        <ul className="mt-3 text-gray-700 text-sm">
          {meal.strIngredients.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-1">
              <span>{item.ingredient}</span>
              <span className="font-semibold">{item.measure}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-700 text-sm line-clamp-3">{meal.strInstructions}</p>
        <div className="mt-4 flex space-x-2">
          <a
            href={meal.strYoutube}
            target="_blank"
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Assistir no YouTube
          </a>
          <a
            href={meal.strSource}
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition"
          >
            Receita Completa
          </a>
        </div>
      </div>
    </div>
  );
}
