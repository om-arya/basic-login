import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const moveButton = () => {
    const randomTop = Math.random() * 80 + 10 + '%';
    const randomLeft = Math.random() * 80 + 10 + '%';
    setPosition({ top: randomTop, left: randomLeft });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button
            type="submit"
            onMouseEnter={moveButton} // Moves the button when hovered over
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
            }}
          >
            Enter
          </button>
        </form>
      )}
    </div>
  );
};

export default App;