import "./Ingredients.css"
import IngredientCard from "./IngredientCard"

export default function Ingredients () {
    return (
        <div id="ingredients">
            <h1 className="naslov">Ingredients</h1>
            <IngredientCard 
                img="./images/dough.jpg"
                text="Our pizza dough is made fresh daily using a blend of high-quality flours, yeast, and a touch of olive oil. It is hand-kneaded and carefully proofed to achieve the perfect balance of lightness and chewiness."
            />
            <IngredientCard
                img="./images/fresh-ingredients.jpg"
                text="Only the freshest ingredients find their way into our pizzas. We use vine-ripened tomatoes, hand-pulled mozzarella cheese, and fragrant basil leaves to create a vibrant and flavorful combination. Taste the difference that quality and freshness make."
            />
            <IngredientCard 
                img="./images/cured-meat.jpg"
                text="Our selection of cured meats is sourced from trusted local suppliers. Each slice is meticulously crafted and expertly seasoned to enhance the flavors. Indulge in the rich and savory taste that our cured meats bring to our pizzas."
            />
        </div>
    )
}