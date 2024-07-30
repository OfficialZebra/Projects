
import '../RecipeApp.css'
import PropTypes from 'prop-types'



function Recipe({title, ingredients, image, steps}) {
//create a list of ingredients
const ingredientsList = ingredients.map((element, index) => {
    return (
        <li key={index}>
            {element}
        </li>
    )
})

//create a list of steps to cook
const stepsList = steps.map((step, index,) => {
    let stepName = Object.keys(step) [0];
    let stepValue = step[stepName];
    return (
        <div key={index} className="steps">
            <strong>{stepName}:</strong>
            <br />
            <p>{stepValue}</p>
        </div>
    )
})

  return (
    <div className='recipe-card'>
        <img src={image} alt={`Image of ${title}`} />
     <h4>Recipe for {title}</h4>
     <h4>Ingredients are:</h4>
     <ul>
        {ingredientsList}
     </ul>
     {stepsList}
    </div>
  )
}

Recipe.propTypes ={
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    steps: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.string
}

Recipe.defaultProps = {
    title: 'Test',
    steps: [
        {'Step 1': 'Test Step 1'},
        {'Step 2': 'Test Step 2'}
    ],
    ingredients: ['ing1', 'ing2']
}

export default Recipe