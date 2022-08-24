

import React ,{ useRef } from 'react'
import { useForm } from "react-hook-form";
import { useHistory  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/api';

import Button from '@mui/material/Button';
import './styles.css'

export default function Login() {

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector( state => state.auth.login.currentUser)
  console.log("Current user" ,user)


    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const handleLogin = (data) => {

        const newUser ={
          email: data.email,
          password: data.password,
        }      
        loginUser(newUser , dispatch, history)
    }; 
  
  return (

    <form onSubmit={handleSubmit(handleLogin)}>

      <label>Email</label>
      <input {...register("email", { pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
      {errors?.email?.type === "pattern" && (
        <p>Email is Invalid</p>
      )}
      <label>Password</label>

      <input
         type="password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      {errors?.password?.type === "required" && <p>This field is required</p>}
      {errors?.password?.type === "minLength" && (
        <p>Password least 6 characters</p>
      )}

      <Button type="Submit"  className='login'> Login</Button>
      <Button  className="register" onClick={() => history.push('/register')}> Register</Button>

    </form>
  )
}
