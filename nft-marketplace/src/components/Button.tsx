import React from "react";

interface ButtonProps {
  variant: "default" | "outline" | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseStyles =
    "py-5 px-9 border-none rounded-3xl transform transition-transform hover:scale-95 hover:duration-150 cursor-pointer flex items-center gap-2 ";

  const variants = {
    default:
      "bg-purple-500 text-white active:purple-600 focus:outline-none focus:ring focus:ring-purple-250",
    outline: "bg-inherit text-white border-solid rounded-3xl border-purple-500",
    ghost: "py-4 px-8 bg-transparent text-white border-none",
  };

  const variantStyle = variants[variant] || variants.default;

  const buttonClassNames = `${baseStyles} ${variantStyle}`;

  return <button className={buttonClassNames}>{children}</button>;
};
