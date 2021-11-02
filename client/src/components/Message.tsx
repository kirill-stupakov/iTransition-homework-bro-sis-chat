import React from "react";

import { message } from "../types";

const isoToReadableString = (string: string) => {
  const date = new Date(string);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return dateTimeFormat.format(date);
};

const sumCharCodes = (string: string) => {
  return string.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
};

const nameToMessageColor = (
  name: string,
  saturation: number,
  lightness: number
) => {
  const seed = sumCharCodes(name);
  const hue = (Math.sin(seed * 1000) + 1) * 180;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

interface Props {
  message: message | null;
}

const Message: React.FC<Props> = ({ message }) => {
  const displayMessage = message || {
    author: "Loading",
    time: "0001-01-01T00:00:00.000Z",
    body: "...",
  };

  return (
    <div
      className="container rounded-3 p-3 my-5 w-50 text-end text-light shadow"
      style={{
        background: nameToMessageColor(displayMessage.author, 50, 45),
        transition: "0.3s",
      }}
    >
      <h5 className="my-0">{displayMessage.author}</h5>
      <p className="my-0">{displayMessage.body}</p>
      <small className="my-0 font-italic opacity-50">
        {isoToReadableString(displayMessage.time)}
      </small>
    </div>
  );
};

export default Message;
