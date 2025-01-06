import React, { useState } from "react";
import styles from '../css/Chatbot.module.css';
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/recommend-songs",
        {
          userIds: ["677b5e1941de19b3ae6e89cb", "677b5dfe254e104368e7e2da"],
        }
      );

      console.log("Backend Response:", response.data); // Debugging

      setMessages((prev) => [
        ...prev,
        { text: response.data.recommendations, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to format the bot's message with bold text and line breaks
  const formatMessage = (text) => {
    return {
      __html: text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br />"),
    };
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat Window */}
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            {message.sender === "bot" ? (
              <div dangerouslySetInnerHTML={formatMessage(message.text)} />
            ) : (
              message.text
            )}
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            Loading recommendations...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your request..."
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;