import React from "react";

interface Props {
  message: string;
}

const Button: React.FC<Props> = ({ message }) => {
  return (
    <button
      type="button"
      className="btn btn-primary px-4 rounded-pill mx-3 my-3"
    >
      {message}
    </button>
  );
};

export default Button;
