import React from "react";

interface ButtonProps {
  handleSubmit: () => void;
  type?: "button" | "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ handleSubmit, type = "button", text }) => {
  return (
    <button
      type={type}
      onClick={handleSubmit}
      className="outline-none bg-gray-900
     text-gray-100 px-3 py-2 rounded-lg shadow-2xl shadow-gray-500 
     cursor-pointer hover:text-pink-500 transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
