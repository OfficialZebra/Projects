import { useState } from 'react'
import './RecipeApp.css'
import Recipe from './components/Recipe'

function RecipeApp() {
  const [count, setCount] = useState(0)

  return (
    <div className='recipeApp'>
      <h1>RecipeApp</h1>
      <Recipe 
      title="Pasta"
      ingredients={['flour', 'salt', 'water']}
      steps={[
        {"Step 1" : "Mix"}
      ]}
      />
      <Recipe 
      title="Fettucine"
      ingredients={['flour', 'salt', 'water']}
       steps={[
        {"Step 1": "Mix"}
      ]}
      />
      <Recipe 
      title="Pasta"
      ingredients={['flour', 'salt', 'water']}
      image='https://s3.amazonaws.com/accsoftwarebootcamp.com/7aco0Iu.jpeg'
       steps={[
         { "Step 1": "Combine flour and salt in a medium bowl. Make a well in the center and add beaten egg. Mix well until a stiff dough forms, adding up to 2 tablespoons water if needed." },
         { "Step 2" : "Knead dough on lightly floured surface until smooth, 3 to 4 minutes." },
         { "Step 3" : "Roll dough by hand or with a pasta machine to desired thickness, then cut into strips for desired width and length." }
       ]}
      />
      {/* <Recipe 
      title="Pizza"
      ingredients={[]}
      steps={[]}
      /> */}
    </div>
  )
}

export default RecipeApp
