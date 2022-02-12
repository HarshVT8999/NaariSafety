import React, { useState } from "react";
import '../App.css'
function LoginForm({ Login,error}){
    const [details, setDetails] = useState({ email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
    return (
        <div className="App">
          <div className='loginbox'>
            <form onSubmit={submitHandler}>
            <h3>Login Here</h3>
            <label for="email">Username</label>
            <input className="email" type="text" placeholder='Email or Phone' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            <label for="pass">Password</label>
            <input className="pass" type="password" placeholder='Password'onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            <button className="btn">Log In</button>
            <div class="social">
              <div class="go"><i class="fab fa-google"></i>  Google</div>
              <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
            </form>
          </div>
        </div>
      );

}

export default LoginForm