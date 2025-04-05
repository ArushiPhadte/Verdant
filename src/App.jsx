import React from 'react';
import { ReactChatbot } from '@vectara/react-chatbot';
import './App.css'; // For custom styles

function App() {
  return (
    <div className="App">
      {/* Other website content */}

      <div className="chatbot-container">
        <ReactChatbot
          customerId="2411510095"
          corpusKeys="Verdant"
          apiKey="zqt_j7y5T2UMh2b8UjHbL4e9gGjg7imUwv6BfiTQBQ"
          title="Chat with AI"
          placeholder="Ask your question..."
          isInitiallyOpen={false}
          zIndex={1000}
          enableStreaming={true}
          language="eng"
        />
      </div>
    </div>
  );
}

export default App;
