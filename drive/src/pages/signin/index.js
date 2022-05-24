import React from 'react'
import GoogleButton from 'react-google-button'
import "./styles.css"

const Signin=()=>{
  return(
    <div className='auth-btn'>
      <GoogleButton 
      onClick={() => { 
        console.log('Google button clicked')
      }}
/>

    </div>
    

  )
}

export default Signin;