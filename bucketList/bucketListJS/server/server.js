// import express library
const express = require('express');
// make the app object from express
const app = express();
// setup the PORT variable
const PORT = process.env.PORT || 3000;

const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config()

//create middleware that allows us to read the body
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//allow any browser to access our API
app.use(cors())

// Our data (used before we learned mongo)
let bucketListArray = [
    {id: 1, description: "Sleep", isComplete: false},
{id: 2, description: "Study", isComplete: false}, 
{id: 3, description: "Walk", isComplete: false }]

//root route handler
app.get('/', function(req, res){
  res.send('This is my Bucket list API running on' + PORT)
})

//READ
app.get('/bucket', function(req, res){
    res.json(bucketListArray)
})

let newId = 3;
//CREATE NEW ITEM (test using ThunderClient: POST by typing {'destination': 'xyx'} in the BODY JSON section)
app.post('/bucket', function(req, res){
//What data would you send to this route?
//Steps:
//0. Check for valid inputElement
if(!req.body.description || (typeof req.body.description) !== 'string'){
    res.status(400).json({
        error:"Need a valid description string!"
    })
}
//1.get the body
let newItem = {
    //add number first then use newId
    id: ++newId ,
    //id: date.now(),
    description: req.body.description,
    isComplete: false
}
//2.attach it to the array
bucketListArray.push(newItem)
//3.send the array back to the client
res.status(201).json(newItem)
})

//UPDATE
app.put('/bucket/:id', function(req,res){
    // 1. Find the id
    console.log(req.params.id)
    let newId = req.params.id -0;
    // 2. find the object
    let foundItem = bucketListArray.find(
        function(itemObj) {
            //true or false and return it
            return itemObj.id === newId
        }
    )
    console.log(foundItem)  
    //happy case
    if(foundItem){
        // 3. change isComplete
        foundItem.isComplete = !foundItem.isComplete;

        // 4. send the item back
        res.json(foundItem)
    } else {
        res.status(404).json({error: "Id does not exist for updating"})
    }


 

})

// app.delete('/bucket/:id', (req, res) => {
// //parseInt will convert to a number
//     const id = parseInt(req.params.id);
//     //filter out item to delete
//    bucketListArray = bucketListArray.filter(
//         function(item){
//             //every function should return something
// return item.id != id 
//         }
//     )
//     //send response back
//     res.json({'message': 'item deleted'})
//     //will not send a message back
//     //response.end()
// })

// DELETE
app.delete('/bucket/:id', (request, response) => {
    //parseInt will convert to a number
    const id = parseInt(request.params.id);
    //Find the index of the item to be deleted - If it doesn't find index -1
    const deleteIndex = bucketListArray.findIndex(item => item.id === id)
    //It found an item with that id
    if (deleteIndex !== -1) {
        const deletedItem = bucketListArray.splice(deleteIndex, 1)
        response.status(200).json({ message: "Success", deletedItem })
    } else {
        response.status(404).json({ error: "Failure to Delete Item, Id was not found" })
    }
})



//start the event listener
const server = app.listen(PORT, function(){
    console.log(`Bucketlist API started on port ${PORT}`)
  })
  //export the express app instance
module.exports = server





  //HOMEWORK BUILD DELETE ROUTE