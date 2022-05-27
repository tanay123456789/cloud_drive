import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import {auth,provider} from '../../firebase'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import "./styles.css"

function Signin(){
  let navigate=useNavigate();
  const signUp=()=>{
    
    signInWithPopup(auth,provider)
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err.message)
    })
    
  } 

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user)

      if(user){
        navigate('/home/:id')
      }
      else{
        navigate('/')
      }


    })
  },[])
  
  return(
      
    <div className='auth-btn'>
      <GoogleButton 
      onClick={signUp}/>
  
  
    </div>
      
  
  )


}



export default Signin;