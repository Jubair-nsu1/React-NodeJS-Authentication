import React,{useState} from 'react'

const Login = () => {

  const [input, setInput] = useState({
    username: '',
    password: '',
  });
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
  }

  return (
    <div>

      <h1>Login User</h1><br/><br/>
        <div class="container-sm border shadow">

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
              </div>
          </form>

        </div>

    </div>
  )
}

export default Login