
import FoodBR from "./components/food_br";
import FoodVegan from "./components/food_vegan";
import FoodBreakfast from "./components/food_breakfast"

export default function Home() {
  return (
    <div>
      <FoodBR/>
      <FoodVegan/>
      <FoodBreakfast/>
    </div>
  );
}
