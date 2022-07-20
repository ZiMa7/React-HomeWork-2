import "./App.css";
import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(password, username);
  return (
    <>
      <div>
        <span>User Name</span>
        <input
          className="user_name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <span>Password</span>
        <input
          className="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="submit"
        disabled={username.length > 5 && password.length > 8 ? false : true}
        onClick={() => onLogin({ username, password })}
      >
        Submit
      </button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <LoginForm
        onLogin={({ username, password }) =>
          alert(`User Name: ${username}, Password: ${password}`)
        }
      />
    </div>
  );
}

export default App;
