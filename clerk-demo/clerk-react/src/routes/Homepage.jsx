import Navbar from "../components/Navbar"
import {SignedIn, SignedOut, SignInButton} from "@clerk/clerk-react"
import {Link} from "react-router-dom";

// Homepage component
const Homepage = () => {
    return (
        <>
        <SignedOut>
            {/* What user see if they are signed out */}
        <Navbar/>
        <div className="text-center mt-5">
            <h1>Welcome to the Bootcamp Blog</h1>
            <p>Please sign in to view your collection of thoughts and experiences</p>
            {/* Allows user to jump into auth flow */}
            {/* SignInButton component from Clerk provides a sign-in option */}
            <SignInButton className="px-3 py-1 rounded-1"/>
        </div>
        </SignedOut>
        <SignedIn>
            {/* What user see if they are signed in */}
            <Navbar/>
            <div className="text-center mt-5">
                <h1>Welcome to the Bootcamp Blog</h1>
                <p>Create and post your own Blogs!</p>
                <Link to="/newpost" className="btn btn-dark">Add New Blog!</Link>
            </div>
        </SignedIn>
        </>
    )
}

export default Homepage