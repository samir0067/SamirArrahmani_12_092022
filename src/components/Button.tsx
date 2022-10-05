import React, { FC } from "react";

/**
 * Type for Button component
 */
type ButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
  isLink?: boolean;
};

/**
 * Generic button used as a navigation link or button in the application
 * @param { string } title button title
 * @param { function } onClick to call a function
 * @param { string } className customizable style if necessary
 * @param { boolean } isLink if true style link use
 */
const Button: FC<ButtonProps> = ({ title, onClick, className, isLink }: ButtonProps) => {
  return (
    <button onClick={onClick} className={isLink ? `link ${className}` : "button"}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  isLink: false,
};

export default Button;
