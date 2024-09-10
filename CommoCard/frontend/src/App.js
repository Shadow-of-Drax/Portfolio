import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import openpgp from "openpgp";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on("message", async (data) => {
      const decryptedMessage = await decryptMessage(data.encryptedText);
      setMessages((prevMessages) => [...prevMessages, decryptedMessage]);
    });
  }, []);

  // Function to send a new message
  const sendMessage = async () => {
    const encryptedText = await encryptMessage(message);
    socket.emit("message", { encryptedText });
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Signal Clone</h1>
      <div className="message-container">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
