import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { AuthContext } from "../Utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// https://medium.com/@simonsruggi/how-to-implement-jwt-authentication-with-react-and-node-js-5d8bf3e718d0
// https://github.com/koolkishan/login-signup-jwt-react-nodejs-mongodb/blob/master/public/src/pages/Login.jsx

const Login = () => {
  //const [cookies] = useCookies([]);
  const navigate = useNavigate();
 // const { setToken } = useContext(AuthContext);

  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/dashboard");
  //   }
  // }, [cookies, navigate]);

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    let email = input.email;
    let password = input.password;

    if(!email && !password){
      setError("Please enter your email and password")
      return
    }
    else if(!email){
        setError("Please enter your email")
        return
    }
    else if(!password){
        setError("Please enter your password")
        return
    }
    else{
        setError('')
    }

    const userData = {
        email,
        password,
    }

    try {
        const response  = await fetch('http://localhost:4000/api/auth/login', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })

        const resp = await response.json() 
        if (resp) {
          if (resp.error) {
            setError(resp.error);
            //setToken(null);
            localStorage.removeItem("token");
          } 
          else {
            //Go to Dashboard
            //setToken(resp.data.token);
            localStorage.setItem("token", resp.data.token);
            navigate("/dashboard");
          }
        }
    } 
    catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div>

      <h1>Login User</h1><br/><br/>
        <div class="container-sm border shadow">

        {/* Error Statement */}
        {/* <span style={{color:'red',fontWeight:'bold'}}>{error}</span> */}
        {error && <span style={{color:'blue',fontWeight:'bold'}}>{error}</span>}

          <form onSubmit={handleSubmit}>
              <div class="form-row mt-3">
                <div class="col mb-2">
                    <input type="email" class="form-control" placeholder="Email" name="email" value={input.email} onChange={onInputChange} ></input>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" name="password" value={input.password} onChange={onInputChange} ></input>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-5">                                       
                    <button style={{fontWeight:'bold'}} class="btn btn-success btn" type="submit">&nbsp;&nbsp; Login</button>                                       
                </div>
                <span>
                  Don't have an account ?<Link to="/register"> Register </Link>
                </span>
              </div>
          </form>

        </div>

    </div>
  )
}

export default Login