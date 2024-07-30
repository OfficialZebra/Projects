import './App.css'
import AboutJon from './components/AboutJon'
import AboutGarfield from './components/AboutGarfield'

function App() {
  const theStyles = { 
    color: "blue",
    fontSize: "48px"
}
//garfields likes
const likesArray = [
  "Pepperoni Pizza", "Spaghetti with Meatballs", 'Jumbo Shrimp', 'Lobster with Filet Mignon', 'CHILI OIL BABY'
]
//garfields dislikes
const dislikesArray = ['Mondays', 'Spiders', 'Raisins', 'Jon singing in the shower', 'english food']

  return (
    <>
    <h1 style={theStyles} 
      className="myStyleClass">
      My favorite comic characters
    </h1>
      <AboutJon/>
      <AboutGarfield likes={likesArray} dislikes={dislikesArray}/>
      
    </>
  )
}

export default App
