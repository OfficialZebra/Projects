$(document).ready(() => {
    //console.log(`jquery is working`)

    //grab the images and save as an array
    let imageData = [
        {src: './assets/images/bear.jpg', caption: 'Beary good bubble tea pop pop'},
        {src: './assets/images/unicorn.jpg', caption: 'My horn can pierce the sky'},
        {src: './assets/images/koala.jpg', caption: 'Oi m8'}
        //if you have more images, they can go here
    ];


    imageData.forEach((image, index)=> {
        //grab the element and set it to a new <img>
        let thumbnail = $('<img>').attr('src', image.src).attr('alt', 'Thumbnail ' + (index +1));
        //index represents position starting with 0 but we started with 1
        console.log('thumbnail is:',thumbnail)
        thumbnail.on('click', function(){
            //change src for .mainImage
            $('#mainImage').attr('src', image.src)
            //display the caption
            $('#caption').text(image.caption)
        })
        $('.thumbnails').append(thumbnail);
    })







})

//everything goes in the document.ready
//think about how to add buttons 'next' and 'previous'