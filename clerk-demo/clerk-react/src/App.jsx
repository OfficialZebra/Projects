// Importing Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
//importing ClerkProvider from Clerk for user authentication
import {ClerkProvider} from "@clerk/clerk-react"
//Importing react router components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//different pages
import Homepage from "./routes/Homepage";
import MyBlogs from "./routes/MyBlogs"
import NewBlog from './routes/NewBlog';
import Success from './routes/Success';




function App() {

  //import our pub key from clerk fo user auth
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PUBLISHABLE_KEY)

if(!PUBLISHABLE_KEY){
  throw new Error("Missing Publishable Key")
}
  return (
    <>
<ClerkProvider publishableKey = {PUBLISHABLE_KEY}>
    <Router>
      {/* Defining the routes for the application */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/myblogs" element={<MyBlogs/>}/>
        <Route path="/newpost" element={<NewBlog/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
</ClerkProvider>

    </>
  );
}

export default App;
