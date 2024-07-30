// Importing necessary components and hooks from react
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import {SignedIn, useUser} from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';


// NewBlog component for creating a new blog post
function NewBlog() {
    // Using useState hook for managing local state for title, author, and description
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState(null);
    // How do we incoporate authentication into our posts to the database?
    const {user, isLoaded} = useUser();

    //This runs the code between curly braces on initial render, and also runs when user value changes, and isLoaded changes
    useEffect(() => {
        if(isLoaded){
            console.log(user)
            setUserId(user.id)
        }
    }, [user, isLoaded])

const navigate = useNavigate();

    // handleSubmit function for handling the form submission
    const handleSubmit = (event) => {
        const blogPost = {title, author, description, userId}
        console.log(blogPost)
        // Preventing the default form submission behavior
        event.preventDefault();

        // How should we build out the fetch to the backend?
        //Making a POST request to the serve to create a new blog post
fetch('http://localhost:3000/postblog', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogPost),
})
.then(res => res.json())
.then(data => {
    //logging the servers repsonse to the console
    console.log(data)
    //Navigate user to success page to indicate their post was created
    navigate('/success')
})
.catch((error) => console.log("Error creating new blog post", error))

    }

    return (
        <>      
        <SignedIn>
            <Navbar />
            <div className="container">
                <h1 className="text-center my-4">New Blog Post</h1>
                {/* The form for creating a new blog post */}
                <form onSubmit={handleSubmit}>

                    {/* What does our form need? */}
                       <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                        type="text" 
                        className='form-control' 
                        id='title' 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Software Blog' required />
                    </div>

                       <div className='mb-3'>
                        <label htmlFor="author" className="form-label">Author</label>
                        <input
                        type="text" 
                        className='form-control' 
                        id='author' 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}
                        placeholder='Full Name' required />
                    </div>

                       <div className='mb-3'>
                        <label htmlFor="description" className="form-label">Blog</label>
                        <textarea
                        type="text" 
                        className='form-control' 
                        id='description' 
                        row="3"
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Limit: 1-1000 Characters' required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                 
                </form>
            </div>
        </SignedIn>
        </>

    )
}

export default NewBlog