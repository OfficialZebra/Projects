import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //list state variable has an initial value of an empty arrray. Will be adding bucket list items to array from the app
  const [list, setList] = useState([])
  // newItem is placeholder for the users input. As a user types in text of a new todo item we will capture it and place it in this state variable
  const [newItem, setNewItem] = useState('')
let url = 'http://localhost:3000/bucket'

//-------------
  //cRud : READ
  //call APIs here
useEffect(function(){
  // goal: call our server API


//calling the api using JS fetch
  fetch(url)
  //convert it to json
  .then(function(res){
    //DON'T FORGET () after res.json
    return res.json()
  })
  .then(function(data){
    //we have data we want: an array that contains objects
    //loads the returned array into the state called list

//loads the returned array into the state called list
setList(data)
  })
  .catch(function(grr){
    console.log(`Hit a roadbump and it says ${grr}`)
  })
  //empty array tells useEffect to only run once after the first render
}, [])
//------------------------------------------

const handleChange = (event) => {
  //grab value
  setNewItem(event.target.value)
}


//-------------------------------------------
// CREATE
const handleSubmit = (event) => {
 //stop the default actions associated with submit
  event.preventDefault()

  //tell the server about the new Item
  fetch(url, {
    method: 'POST',
  body: JSON.stringify({ description: newItem}),
  headers: {'Content-Type': 'application/json'}
})
  .then(function(res){
    return res.json()
  })
  .then(function(item){
    //update the state
    // replaces whats currently in setlist with copy of the list plus the newItem
    //...spread operator makes a true copy by spreading out into a new array. Adding newItem to end of list
  //replaces whats currently in setList with copy of the list plus the newItem
    setList(
    (previousList) => {
      // return [...previousList, {id: Date.now(), description: newItem, isComplete: false}]
      return [...previousList, item]
    } 
  ) 
  //clear out input field, new setState
  setNewItem('')

  })
  
  

}
//------------------------------------------
//crUd UPDATE
//update the status of the bucketlist item
const handleClick = (idArgument) => {
//first tell the server that this item is now complete
fetch(`${url}/${idArgument}`,{
  method: "PUT",
})
.then((res)=> res.json())
.then(()=>{
  //make copy of list state
let copyOfList = [...list]
//search through copyOfList, find the id match
let Item = copyOfList.find( (item) => item.id === idArgument)

//toggle the status. Changing the Item
Item.isComplete = !Item.isComplete;
//replace current state items with the altered copy
setList(copyOfList)
})
.catch(grr => console.log(grr.message))
}
//----------------------------------------
//DELETE
const handleDelete = idArgument => {
  // 1.inform the server
  fetch(`${url}/${idArgument}`,{method: 'DELETE'})
  .then(res => res.json())
  .then(() => {
    // 2. if successful update the front end
    let copyOfList = [...list];

// delete one of the objects in this copyOfList array
let filteredListArray = copyOfList.filter(function(obj){
  //if true it will pass through if false it will filter out
  return obj.id != idArgument
})

// 3.  update teh list in the state
//set the state to this
setList(filteredListArray)


  })
  .catch(grr => console.log(grr.message))
  
}

  //iterate over the list array from the state
  //index is unique key
const bucketList = list.map( (item, index) => {
//return the li with the item.description
//
return (
  <div key={item.id}>
    <li 
      onClick={() => {handleClick(item.id)}}
      className={item.isComplete ? "completed" : ""}
    >
      {item.description}
      <button onClick={(event) => {
        event.stopPropagation();
        handleDelete(item.id)
      }}>
        Delete
      </button>
    </li>

  </div>

);
})



  return (
    <>
      <div className="App">
        <h1>Bucketlist App</h1>
        {/* onSubmit event handler calls a custom function called handleSubmit. The function will update the current state by adding a new todo item to the existing todo list */}
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          className='item-input'
          autoComplete='off'
          name='newItem'
          placeholder='OI BRUB U WHOT?!'
          // onChange event handler calls a custom function called handChange. The function will update 
          onChange={handleChange}
          value={newItem}
          />
          <input type="submit"
          value="Add Item"
          className='save-button' />
        </form>

        <div className="item-content">
          <ol>
            {/* dynamic list items */}
            {bucketList}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
