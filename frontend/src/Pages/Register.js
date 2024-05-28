import React, { useState } from "react";

const Register = () => {

  const [valid, setValid]     = useState(false);

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    setValid(true);
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "fullname":
          if (!value) {
            stateObj[name] = "Please enter Full Name.";
            setValid(false);
          }
          
          break;

        case "email":
          const emailRegex = /^[A-Z0-9._%+-]+@bylc.org$/i;
          if (!value) {
            stateObj[name] = "Please enter Email.";
            setValid(false);
          }
          else if (!emailRegex.test(value)) {
            stateObj[name] = 'Please enter your valid BYLC email';
            setValid(false);
          } 

          break;  
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          setValid(false);
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          setValid(false);
          break;
 
        default:
          break;
      }
      
      
      return stateObj;
    });
  }


  async function handleSubmit(e) {
    e.preventDefault();
    if(valid) {  

      console.log("Fullname: "+input.fullname);
      console.log("Email: "+input.email);
      console.log("Password: "+input.password);
      console.log("Cpassword: "+input.confirmPassword);

        // const response  = await fetch('http://localhost:1337/api/register', {
        //   method:'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     email,
        //     fullname,
        //     password
        //   }),
        // })
        // const data = await response.json()
        // console.log(data);
    
    }
  }



// https://www.cluemediator.com/password-and-confirm-password-validation-in-react

  return (
    <div>
        <h1>Register User</h1><br/><br/>
        <div class="container-sm border shadow">

          <form onSubmit={handleSubmit}>
              <div class="form-row mt-3">
                <div class="col mb-2">
                    <input type="text" class="form-control" placeholder="fullname" name="fullname" value={input.fullname} onChange={onInputChange} onBlur={validateInput}></input>
                    {error.fullname && <span style={{color:'red'}}>{error.fullname}</span>}
                </div>
                <div class="col mb-2">
                    <input type="email" class="form-control" placeholder="Email" name="email" value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                    {error.email && <span style={{color:'red'}}>{error.email}</span>}
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" name="password" value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                    {error.password && <span style={{color:'red'}}>{error.password}</span>}
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" name="confirmPassword" value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput} ></input>
                    {error.confirmPassword && <span style={{color:'red'}}>{error.confirmPassword}</span>}
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