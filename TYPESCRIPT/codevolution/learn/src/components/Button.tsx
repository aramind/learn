import React from "react";
type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={(e) => handleClick(e, 1)}></button>
    </div>
  );
};

export default Button;
