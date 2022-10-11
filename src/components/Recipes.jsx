import { useState } from 'react';
import './Recipes.scss';
const randomAux = {
    aux1 : 1,
    aux2 : 2,
    aux3 : 3,
}

const randomAux2 = {
    ...randomAux,
    aux4 : 4,
    aux3 : 3,
}

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button className="btn" onClick={() => setRecipe(randomAux)}>Random aux 1</button>
            <button className="btn" onClick={() => setRecipe(randomAux2)}>Random aux 2</button>
            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;