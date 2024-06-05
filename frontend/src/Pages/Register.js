import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {


  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const [error, setError]     = useState(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let fullname = input.fullname;
    let email = input.email;
    let password = input.password;
    let confirmPassword = input.confirmPassword;

    if(password != confirmPassword) {
      setError('Passwords dont match!')
    }
    else if(fullname == null || email==null|| password==null || confirmPassword==null ){
      setError('Enter all fields*')
    } 
    else{ 

      const userData = {
        fullname,
        email,
        password,
      }

      try {
        const response  = await fetch('http://localhost:4000/api/auth/register', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userData}),
        })

        const data = await response.json() 
        if (data) {
          if (data.error) {
            setMessage(data.error);
          } 
          else {
            setMessage("Account Created!");
          }
        }

      } 
      catch (error) {
        console.log(error)
      }
    
    }

  }


// https://www.cluemediator.com/password-and-confirm-password-validation-in-react

  return (
    <div>
        <h1>Register User</h1><br/><br/>
        <div class="container-sm border shadow">

          {/* Error Statement */}
          <span style={{color:'red',fontWeight:'bold'}}>{error}</span>

          <form onSubmit={handleSubmit}>
              <div class="form-row mt-3">
                <div class="col mb-2">
                    <input type="text" class="form-control" placeholder="fullname" name="fullname" value={input.fullname} onChange={onInputChange} ></input>
                </div>
                <div class="col mb-2">
                    <input type="email" class="form-control" placeholder="Email" name="email" value={input.email} onChange={onInputChange} ></input>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" name="password" value={input.password} onChange={onInputChange} ></input>    
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Repeat Password" name="confirmPassword" value={input.confirmPassword} onChange={onInputChange} ></input>                   
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-5">                                       
                    <button style={{fontWeight:'bold'}} class="btn btn-success btn" type="submit">&nbsp;&nbsp; Sign Up</button>                                       
                </div>
                <span>
                  Already have an account? <Link to="/login"> Login </Link>
                </span>
              </div>
          </form>
          {message && <span style={{color:'blue',fontWeight:'bold'}}>{message}</span>}
        </div>
    </div>
  )
}

export default Register