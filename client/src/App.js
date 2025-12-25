import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendName = async () => {
    if (name.trim() === "") {
      setMessage("⚠️ Please enter your name");
      return;
    }

    const response = await fetch("http://localhost:5000/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>👋 Welcome</h1>
        <p>Enter your name to get a greeting</p>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={sendName}>Say Hello</button>

        {message && <h2 className="message">{message}</h2>}
      </div>
    </div>
  );
}

export default App;
