import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";

import Button from "../Button/Button";
import Message from "../Message/Message";
import { message } from "../../types";

interface Props {
  userName: string;
}

const socket = socketIO("http://localhost:5000");

const AuthorizedPanel: React.FC<Props> = ({ userName }) => {
  const [lastMessage, setLastMessage] = useState<message | null>(null);

  useEffect(() => {
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

  return (
    <>
      <Message message={lastMessage} />
      <Button message="Bro!" onClick={() => sendMessage("Bro!")} />
      <Button message="Sis!" onClick={() => sendMessage("Sis!")} />
    </>
  );
};

export default AuthorizedPanel;
