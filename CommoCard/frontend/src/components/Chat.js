import React, { useState, useEffect, useContext } from "react";
import socketIOClient from "socket.io-client";
import { AuthContext } from "../context/AuthContext";
import { decryptMessage, encryptMessage } from "../utils/encryption";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const { token, user } = useContext(AuthContext);

  const socket = socketIOClient("http://localhost:5000");

  useEffect(() => {
    socket.on("message", async (encryptedMessage) => {
      const decryptedMessage = await decryptMessage(
        encryptedMessage,
        user.privateKey,
        user.passphrase
      );
      setMessages((prevMessages) => [...prevMessages, decryptedMessage]);
    });

    socket.on("typing", () => setTyping(true));
    socket.on("stopTyping", () => setTyping(false));
  }, [user.privateKey, user.passphrase]);

  const sendMessage = async () => {
    const encryptedMessage = await encryptMessage(message, user.publicKey);
    socket.emit("message", encryptedMessage);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      {typing && <TypingIndicator />}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={() => socket.emit("typing")}
        onKeyUp={() => socket.emit("stopTyping")}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
