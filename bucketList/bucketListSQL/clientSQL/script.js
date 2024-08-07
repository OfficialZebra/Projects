//cRud - READ
//read the items from our API running on localhost:3000
//document.ready runs when the browser loads initially
$(document).ready(() => {
    fetch('http://localhost:3000/bucket')
        .then(response => {
            return response.json()
        })
        .then(dataArray => {
            //empty ul
            $('ul').empty();
            //go through array and make li out of it
            dataArray.forEach(function (itemObj) {
                //item ojb is complete else nothing
                let completedString = itemObj.is_complete ? 'class="completed"' : '';
                $('ul').append(`
                <li ${completedString} data-id=${itemObj.item_id}>
    ${itemObj.description}
    <span> 
    <i class="fa-solid fa-delete-left">
    </span>
    </li>`)
            })
        })
        .catch(err => {
            console.log(err)
        })
    //----------------------------
    //crUd - UPDATE
    //select ul
    //add a click listener to it
    //set this ======== li that was clicked
    // if all that happens run the callback function
    //callback function toggles the "completed" class
    $('ul').on('click', 'li', function () {
        let self = this;
        //get id for clicked item
        let id = $(this).data("id")
        //make http PUT request
        fetch("http://localhost:3000/bucket/" + id, { method: 'PUT' })
            .then(res => {
                return res.json()
            })
            .then(data => {
                $(self).toggleClass('completed')
                console.log('the data in the PUT coming back from api is : ', data)
            })
            .catch(err => {
                console.log(err)
            })
    });
    //--------------------------------------
    //Crud CREATE
    //create if user types "enter"
    // $('ul').on('click', 'span', function () {
    //     //grab this span and go to its parent and delete it
    //     $(this).parent().remove();
    // });

    $('input').keypress(function (event) {
        //if the keypress is "enter" ie 13 only then create something else ignore
        if (event.which === 13
            && $(this).val()
        ) {
            let userInput = $(event.target).val().trim().substring(0, 30);
            //inform the backend api
            fetch('http://localhost:3000/bucket', {
                method: 'POST',
                body: JSON.stringify({ "description": userInput }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json()
            })
            .then(newItem => {
                let completedString = newItem.is_complete ? 'class="completed"' : '';
                //append a new li
                $('ul').append(`
                    <li data-id="${newItem.item_id}" 
                        ${completedString}>
                        ${newItem.description}
                        <span>
                            <i class='fa fa-trash-alt'></i>
                        </span>
                    </li>
                `);
                //empty out the input
                $(this).val('');
            })
            .catch(err => console.log(err))
        }
    });
    //-------------------------------------------------------------
    //cruD - DELETE
    $("ul").on('click', 'span', function (event) {
        event.stopPropagation();
        let self = this;
        //get the id of the clicked item
        let clickedItem = $(self).parent().data("id");

        fetch(
            "http://localhost:3000/bucket/" + clickedItem, 
            { method: 'DELETE' }
        )
        .then(function () {
            $(self).parent().remove()
        })
        .catch(err => {
            console.log(err)
        })
    })


    //if user hits escape key empties out the input
    // user can only type letters or numbers


    //closing document.ready
})


