

import React  from 'react'
import { useForm } from "react-hook-form";
import "./styles.css";
import { useDispatch , useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { registerUser } from '../redux/api';




export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

 const handleRegister = (data) => {

  const newUser={
    firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    
  }

registerUser(newUser , dispatch , history)

}; 



  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>FirstName is invalid</p>
      )}

      <label>Laste Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p> LastName is invalid</p>
      )}


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

      <input type="submit" />
    </form>
  )
}
