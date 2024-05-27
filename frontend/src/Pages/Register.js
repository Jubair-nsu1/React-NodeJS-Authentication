import React, { useState } from "react";

const Register = () => {

  
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
 
  }
 
  const validateInput = e => {
 
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(fullname && email && password && confirmPassword) {  

      if(password !== confirmPassword){
        console.log('The passwords dont match')
        return
      }else{
        const response  = await fetch('http://localhost:1337/api/register', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            fullname,
            password
          }),
        })
        const data = await response.json()
        console.log(data);
      }
    
    }
  }

  // const onVerifyNewPassword = () => {
  //     if(password !== confirmPassword){
  //       console.log('The passwords dont match')
  //       return
  //     }else{
  //       console.log('Ok.')
  //     }
  // }

// https://www.cluemediator.com/password-and-confirm-password-validation-in-react

  return (
    <div>
        <h1>Register User</h1><br/><br/>
        <div class="container-sm border shadow">

          <form onSubmit={handleSubmit}>
              <div class="form-row mt-3">
                <div class="col mb-2">
                    <input type="text" class="form-control" placeholder="Name" name="fullname" value={input.fullname} onChange={onInputChange} onBlur={validateInput}/>
                    {error.email && <span className='err'>{error.username}</span>}
                </div>
                <div class="col mb-2">
                    <input type="email" class="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onBlur={onVerifyNewPassword} />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-5">                                       
                    <button style={{fontWeight:'bold'}} class="btn btn-success btn" type="submit">&nbsp;&nbsp; Sign Up</button>                                       
                </div>
              </div>
          </form>

        </div>
    </div>
  )
}

export default Register