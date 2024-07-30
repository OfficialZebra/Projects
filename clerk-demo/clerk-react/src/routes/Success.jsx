// Imports
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

// The Success function is a functional component that displays a success message after a blog post has been successfully posted
function Success() {
    return (
        <>
            {/* The Navbar component is included at the top of the page */}
            <Navbar/>
            <div className="text-center mt-5">
                <h1>Blog Succefully Posted!</h1>
                {/* A Link component is used to create a button that navigates back to the home page ("/") when clicked */}
                <Link to="/" className="btn btn-dark mt-3">Return Home</Link>
            </div>
        </>
    )
}

export default Success