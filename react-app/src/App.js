import './App.css';

import {useState} from 'react';

function App() {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function loginRestCall() {
  
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass })
    };
    fetch('/api/login', requestOptions)
      .then(res => res.text())
      .then(res => {localStorage["auth"] = res});
  }

  return (
    <div class="d-flex justify-content-center align-middle vertical-center">
      <div class="class1">
        <h3>Login</h3>
        <form action="#">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={event => setUser(event.target.value)}
              value={user}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={event => setPass(event.target.value)}
              value={pass}/>
          </div>
          <button type="submit" onClick={loginRestCall} class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}


export default App;
