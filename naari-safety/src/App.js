import './App.css';
function App() {
  return (
    <div className="App">
      <div className='loginbox'>
        <input
          className="email"
          type="text"
          placeholder='Enter Email Address'
        />
        <input
          className="pass"
          type="password"
          placeholder='Enter your password'
        />
        <button className="btn">Log In</button>
      </div>
    </div>
  );
}

export default App;
