export default function IngredientCard (props) {
    return (
        <div id="ingredient-card">
            <img src={props.img} alt=""/>
            <p>{props.text}</p>
        </div>
    )
}