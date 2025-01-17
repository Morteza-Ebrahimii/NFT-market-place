import React from "react";
import clsx from "clsx"; // Import clsx


interface ButtonProps {
  variant: "default" | "outline" | 'ghost' | 'HeaderButton';
  children: React.ReactNode;
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ variant, children, className }) => {
  const baseStyles =
    "py-4 px-7 md:py-5 md:px-9 rounded-3xl transform transition-transform hover:scale-95 hover:duration-150 cursor-pointer flex items-center gap-2 ";

  const variants = {
    default:
      "bg-purple text-white active:purple-600 focus:outline-none focus:ring focus:ring-purple-250 ",
      HeaderButton:
      "bg-purple text-white active:purple-600 focus:outline-none focus:ring focus:ring-purple-250 text-base font-semibold justify-center rounded-2xl",
    outline: "bg-gray text-white border-solid border-2 rounded-3xl border-purple",
    ghost: "bg-transparent text-white border-none",
  };


  const variantStyle = variants[variant] || variants.default;

  const buttonClassNames = clsx(baseStyles, variantStyle, className);

  return <button className={buttonClassNames}>{children}</button>;
};
