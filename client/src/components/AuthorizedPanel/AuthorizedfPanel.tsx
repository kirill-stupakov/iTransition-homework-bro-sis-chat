import React, { useState, useEffect } from "react";

import Message from "../Message/Message";
import { message } from "../../types";

interface Props {
  userName: string;
  socket: any;
  onLogOut: () => void;
}

const AuthorizedPanel: React.FC<Props> = ({ userName, socket, onLogOut }) => {
  const [lastMessage, setLastMessage] = useState<message | null>(null);

  useEffect(() => {
    socket.emit("getMessage", null);
    socket.on("message", (message: message) => {
      setLastMessage(message);
    });
  }, []);

  const sendMessage = (body: string) =>
    socket.emit("message", {
      author: userName,
      body,
      time: new Date().toISOString(),
    });

  const messages = ["Bro!", "Sis!"];

  return (
    <>
      <Message message={lastMessage} />
      {messages.map((message) => (
        <button
          type="button"
          className="btn btn-primary px-4 rounded mx-3 shadow-sm"
          onClick={() => sendMessage(message)}
          key={message}
        >
          {message}
        </button>
      ))}
      <button
        type="button"
        className="btn btn-danger px-4 rounded mx-3 shadow-sm"
        onClick={onLogOut}
      >
        Log out
      </button>
    </>
  );
};

export default AuthorizedPanel;
