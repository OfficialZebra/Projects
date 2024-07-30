import {SignedIn, UserButton} from "@clerk/clerk-react"
import { Link } from "react-router-dom"

// Navbar function component
function Navbar() {
    return (
        <>
      
            {/* Start of the navigation bar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Brand name for the navbar */}
                    <a className="navbar-brand" href="/">ACC Blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* What links should a user see when signed in? */}
                     <SignedIn>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/newpost">Create a blog</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link" to="/myblogs">My Blogs</Link>
                            </li>
                        </ul>
                        {/* UserButton from Clerk to provide user with options to */}
        
                        </SignedIn>
                    {/* If we want to logout or sign out how can we accomplish this? */}
                    <UserButton afterSignOutUrl="/"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar