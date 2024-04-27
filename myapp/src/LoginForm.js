import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initializing navigate function

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ UserName: username, Password: password })
    };
  
    try {
      const response = await fetch('https://localhost:7106/userCredentials/login', requestOptions);
      const data = await response.json(); // This now expects a JSON response
  
      if (response.ok) {
        alert(data.Message); // Shows the login message from the server
        navigate('/dashboard'); // Navigate to Dashboard after successful login
      } else {
        alert(`Failed to log in: ${data.Message}`); // Use the message from the server
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to log in: Check the console for more information.');
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
