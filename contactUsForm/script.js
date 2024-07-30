$(document).ready(() => {
    



    /* Interactivity:
1.Add handlers on each element to check if the user input meets rules.  
2.Add a submit handler for the form, that is supposed to send data to the back-end (now it will not).
3.If all errors are zero length strings, then show success message and after 1 second reset the form. */


//sudo code
// select div elements I want check user input rules
//How do I check if the user input meets rules?
//Possibly with if/else function?
//after referencing Eva and Piyush code do I understand what is going on? Sort of
//go through copied code and make notes to see if I can explain what is going on for the email section

//HINTS FROM PIYUSH
// 2. Use .on('blur', function...) to fire the handler if the user navigates OUT of the input element.
// 3. Grab what's in an input element by using .val() method
// 4. How to count number of words?  a. split the string using " " (space) as a separator and then evaluate the .length of it to get the number of words.  You may trim any spaces in the front and back just to make sure they don't throw your validation off.
// How to count number of characters in a string?  var.length should do it.
// 5. To add an error to the name_error element, try to select that element and run a .text('actual error message') to it.
// 6. Do the above for each input element.
//7. Now select the form and run a .on('submit') on it.  The included callback should have a parameter called event, which allows you to run event.preventDefault() first thing in that function.



//-------------------------------
$('#name').on('blur', function(){
    var input = $(this).val()
    var wordArr = input.split(' ')
    if(wordArr.length < 2 || input.length < 6){
        $('.error').text('Name must be at least 5 characacters and 2 words');
    }else{
        $('.error)').text('');
    }
})
//----------------------------------
// on() allows me to attach one or multiple event handlers on the selected element
$('#email').on('blur', function(){
//assigning emailInput, using this to designate element receiving the event of setting the value for email input
    var emailInput = $(this).val()
    //assigning pattern to an email regEx
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //if pattern doeesnt match emailInput return error, check by using test()
    if(!pattern.test(emailInput)){
        $('.error').text('Name must be at least 5 characacters and 2 words');
    }
    //anything else outside above error will return blank text error?
    else{
        $('.error)').text('');
    }
})
//---------------------------------
$('#phone').on('blur', function(){
    var phone = '(512) 123-4567'
    var phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    // phoneRegex.test(phone)
    if(phone.length < 14 || phoneRegex < ){
        $('.error').text('Name must be at least 5 characacters and 2 words');
    }
    else{
        $('.error').text('');
    }
})
//-------------------------------
$('#message').on('blur', function(){
    var messageInput = $(this).val()
    var messageArr = messageInput.split(' ')
    if (messageInput < 10){
        $('.error').text('Must be at least 10 characters')
    }
    else{
        $('.error').text('');
    }
})




//7
$('form').on('submit', function(event){
event.preventDefault()
})















})