import React, { useEffect } from 'react'

import { useSelector , useDispatch } from 'react-redux'
import { useHistory  } from "react-router-dom";
import './styles.css'


export default function Home() {
  const history = useHistory();


  const userToken = useSelector( state => state.auth.login?.currentUser?.accessToken)

  if(userToken !==undefined){
    sessionStorage.setItem('user', userToken)
  }
 

  useEffect( () =>{

 const checkToken =  sessionStorage.getItem('user')
 
 if(!checkToken){
  history.push('/login')
 }


  },[])

  return (
    <div>
        Home page
    </div>
  )
}
