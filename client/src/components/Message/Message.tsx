import React, { useState, useEffect } from "react";
import axios from "axios";

import { message } from "../../types";

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
  gradientWidth: number,
  saturation: number,
  lightness: number
) => {
  const seed = sumCharCodes(name);
  const startHue = (Math.sin(seed * 1000) + 1) * 180;
  const endHue = startHue + gradientWidth;
  const res = `linear-gradient(45deg, hsl(${startHue}, ${saturation}%, ${lightness}%), hsl(${endHue}, ${saturation}%, ${lightness}%))`;
  return res;
};

const Message = () => {
  const [lastMessage, setLastMessage] = useState<message | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lastMessage")
      .then((res) => setLastMessage(res.data));
  }, []);

  return (
    lastMessage && (
      <div
        className="container rounded-3 p-3 w-50 text-end text-light"
        style={{
          background: nameToMessageColor(lastMessage.author, 30, 50, 50),
        }}
      >
        <h5 className="my-0">{lastMessage.author}</h5>
        <p className="my-0">{lastMessage.body}</p>
        <small className="my-0 font-italic">
          {isoToReadableString(lastMessage.time)}
        </small>
      </div>
    )
  );
};

export default Message;
