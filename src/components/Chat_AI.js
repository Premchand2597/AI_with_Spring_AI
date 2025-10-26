import React, { useState } from "react";

function Chat_AI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [initialResponseText, setInitialResponseText] = useState("Response will appear here...");

  async function generateResponse() {
    setResponse("");
    setInitialResponseText("Response is generating... Please wait!")
    try {
      const res = await fetch(
        `http://localhost:9090/stream-chat/Premchand?message=${encodeURIComponent(prompt)}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Convert response to text (since backend returns Flux<String>)
      const text = await res.text();
      setInitialResponseText("")
      setResponse(text);
      setPrompt("");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Error: Could not fetch AI response.");
    }
  }

  return (
    <>
      <div style={{ margin: "20px" }}>
        <textarea
          placeholder="Enter your prompt"
          cols={100}
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <br />
        <br />

        <button
          style={{
            border: "none",
            outline: "none",
            padding: "10px 20px",
            cursor: "pointer",
            background: "green",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={generateResponse}
        >
          Ask AI
        </button>
      </div>

      <div
        style={{
          whiteSpace: "pre-wrap",
          background: "#f7f7f7",
          padding: "15px",
          borderRadius: "5px",
          width: "80%",
          margin: "20px auto",
          minHeight: "100px",
          textAlign: 'left'
        }}
      >
        {response || initialResponseText}
      </div>
    </>
  );
}

export default Chat_AI;
