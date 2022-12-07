import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  href: string,
  text?: string,
  styles?: string,
  children?: ReactNode
};

const Button: React.FC<ButtonProps> = ({ href, text, styles, children }) => {
  return (
    <Link
      href={href}
      className={`block rounded-md py-2 px-4 text-lg font-medium ${styles}`}
    >
      {text && text}
      {children}
    </Link>
  );
};


export default Button;