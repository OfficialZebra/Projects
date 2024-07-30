import { useState } from 'react'
import './App.css'

const LoginForm = () => {
  const [showPassword, //current value of the state
     setShowPassword //a function used to change the state
    ] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <h1>Login Form</h1>
      <form className='form'>
        <div>
          <input type="email" name="email" id="email" placeholder='Please enter your email' />
        </div>
        <div>
          {/* using ternary operator for line below a shorter if then else statement. Condition ? 'if true' : 'else somethingelse' */}
          <input type={showPassword ? "text" : "password" }placeholder='Please enter your password' />
          <input type="checkbox" name="showpassword" onChange={handleShowPassword} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <div>


      </div>
    </>
  )
}

export default LoginForm
