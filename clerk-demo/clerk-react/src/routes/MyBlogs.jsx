import { SignedIn, useUser } from "@clerk/clerk-react"
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar"
import BlogCard from "../components/BlogCard"


function MyBlogs() {

    const [posts, setPosts] = useState([]); 
    const {error, setError} = useState(null);
    const { user, isLoaded } = useUser();



useEffect(() => {
    if(user){
        //query ?KeyValue=
        fetch(`http://localhost:3000/getBlogs?userId=${user.id}`)
        .then(res => res.json())
        .then(data => {
        //What do we do with data once we receive it?
        console.log(data)
        setPosts(data)
        })
        .catch(error => {
            console.error('Error:', error)
            setError (`Cannot find your blogs at the moment: ${error.message}`)
        })
    }
}, [user])

if(error){
    return (
        <>
        <Navbar/>
        <div className='container mt-5'>
            <h1 className="text-center">{error}</h1>
        </div>
        </>
    )
}

    if (!Array.isArray(posts)) {
        return (
            <>
                <Navbar />
                <div className="container mt-5">
                    <h1 className="text-center">You have no blog posts yet.</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <SignedIn>
                <Navbar />
                <div className="container mt-5">
                    <h1 className="text-center">My Personal Blogs</h1>
                    <div className="row mt-5">
                        {/* Map over the posts and create a BlogCard for each one */}
                        {posts.map((post) => (
                            <div className="col-md-4 mb-4">
                                {/* How should the data be displayed? */}
                                <BlogCard
                                    key={post.id}
                                    title={post.title}
                                    author={post.author}
                                    description={post.description}
                                
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </SignedIn>
        </>
    )
}

export default MyBlogs