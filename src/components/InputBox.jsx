import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import '../App.css';

const InputBox = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue(""); // Clear input after sending
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" ? handleSend() : null;
        }}
        placeholder="Type a message"
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>
        <IoSendSharp size={20} />
      </button>
    </div>
  );
};

const styles = {
  inputContainer: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "11px",
    paddingRight: "40px", // To make space for the button
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#f2f2f2",
    outline: "none",
  },
  button: {
    position: "absolute",
    right: "2em",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "5px",
  },
};

export default InputBox;
