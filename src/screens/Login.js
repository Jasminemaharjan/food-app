import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login Screen</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;