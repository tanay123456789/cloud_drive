import React from 'react'
import GoogleButton from 'react-google-button'

const Signin=()=>{
  return(
    <div>
      <GoogleButton 
      onClick={() => { 
        console.log('Google button clicked')
      }}
/>

    </div>
    

  )
}

export default Signin;