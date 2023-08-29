import React, { useState } from 'react'

import { Link } from 'react-router-dom';



import { AUTH0_REALM } from '../../config';
import { auth } from '../../services/auth().service';

const Register = () => {

    const [user,setUser] = useState({
      email:""  ,
      password:"",
     
    });
   

    const onChangeHandler = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        auth.signup(
            {
            email : user.email   ,
            password : user.password,
            connection:AUTH0_REALM,
        },
        function(error ,result)
        {
                if(error){
                    console.log("registration failed")
                    console.log(error);
                    return;
                }
                console.log("user registration successful")
                console.log(result)
            }
        
        )
        console.log(user);
    }

  return (
    <div>
        <h3>Regsiter</h3>
        <form>
            <input 
            type="email"
            placeholder='username'
            name="email"
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
            <button type="button"onClick={onSubmit}>Register</button>
            <p>Already have account ? <Link to="/">Login</Link></p>
        </form>
    </div>
  )
}

export default Register