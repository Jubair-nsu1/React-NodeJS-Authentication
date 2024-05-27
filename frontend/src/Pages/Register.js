import React from 'react'

const Register = () => {

  const [fullname,setFullname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  async function SignUp(e) {
    e.preventDefault();
  
  }

  return (
    <div>
        <h1>Register</h1><br/><br/>
        <div class="container border shadow">

          <form onSubmit={SignUp}>
              <div class="form-row">
                <div class="col mb-2">
                    <input type="text" class="form-control" placeholder="Name" name="fullname" value={fullname} onChange={e => setFullname(e.target.value)} />
                </div>
                <div class="col mb-2">
                    <input type="email" class="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div class="col mb-2">
                    <input type="password" class="form-control" placeholder="Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-5">                                       
                    <button style={{fontWeight:'bold'}} class="btn btn-success btn-lg" type="submit">&nbsp;&nbsp; Submit</button>                                       
                </div>
              </div>
          </form>

        </div>
    </div>
  )
}

export default Register