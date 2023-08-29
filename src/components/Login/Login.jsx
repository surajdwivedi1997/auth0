import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../services/auth().service'
import { AUTH0_LOGIN_REDIRECT_URI, AUTH0_LOGIN_RESPONSE_TYPE, AUTH0_REALM } from '../../config'

export const Login =() => {
  const navigate = useNavigate();
  const[user,setUser] = useState(
    {
      email : "",
      password : ""
    }
  )

  const onChangeHandler = (e) =>{
    setUser({
      ...user,[e.target.name]: e.target.value,
    })
    
  }
  const onSubmit = (e) => {
    console.log(user);
    auth.login(
      {
        username:user.email,
        password:user.password,
        realm :AUTH0_REALM,
        redirectUri:AUTH0_LOGIN_REDIRECT_URI,
        responseType:AUTH0_LOGIN_RESPONSE_TYPE,
      },
      function(error ,result)
        
      {
                if(error){
                    console.log("Login failed")
                    console.log(error);
                    return;
                }
                console.log("Login successful")
                console.log(result)

                if (result.accessToken) {
                  
                  navigate('/private'); 
                }
            }

    )

  }

  return(
    <div>
      <h1>LOGIN</h1>
      <form className="login-form" >
    <input
    type='email'
    placeholder='username'
    name='email' 
    value={user.email}
    onChange={onChangeHandler}
    />
    <input
    type='password'
    placeholder='password'
    name='password' 
    value={user.password}
    onChange={onChangeHandler}
    />
    <button type='button' onClick={onSubmit} >
      LOGIN
    </button>
<p> Not registered?<Link to="/register">Create an account</Link></p>

      </form>
    </div>
  )
  
}
export default Login