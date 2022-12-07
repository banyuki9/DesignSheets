import { ReactNode } from "react";

type ButtonProps = {
  text?: string;
  styles?: string;
  children?: ReactNode;
  buttonFunc: Function
};

const Button: React.FC<ButtonProps> = ({ text, styles, children, buttonFunc }) => {
  const clickHandler = () => {
    buttonFunc();
  }
  return (
    <button
      onClick={clickHandler}
      className={`block rounded-md py-2 px-4 font-medium ${styles}`}
    >
      {children}
      {text && text}
    </button>
  );
};


export default Button;