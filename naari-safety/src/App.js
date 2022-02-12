import './App.css';
function App() {
  return (
    <div className="App">
      <div className='loginbox'>
        <form>
        <h3>Login Here</h3>
        <label for="email">Username</label>
        <input
          className="email"
          type="text"
          placeholder='Email or Phone'
        />
        <label for="pass">Password</label>
        <input
          className="pass"
          type="password"
          placeholder='Password'
        />
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

export default App;
