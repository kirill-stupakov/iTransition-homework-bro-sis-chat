import React from "react";

interface Props {
  onClick: () => void;
  message: string;
}

const Button: React.FC<Props> = ({ onClick, message }) => {
  return (
    <button
      type="button"
      className="btn btn-primary px-4 rounded m-3 shadow-sm"
      onClick={onClick}
    >
      {message}
    </button>
  );
};

export default Button;
