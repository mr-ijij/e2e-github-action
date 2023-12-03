import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === 'username' && password === 'password') {
      window.location.href = '/dashboard';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <dev>
        <label>
          Username:
          <input type="user_name" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
      </dev>
      <dev>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
      </dev>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;