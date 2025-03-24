const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.id} style={{ backgroundColor: ingredient.color }}  >
            {ingredient.name}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  export default IngredientList;
  