import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      alert('Login success');
      console.log(res.data);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
