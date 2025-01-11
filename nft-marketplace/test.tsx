import React from 'react';

// Define the Button component
const Button = ({ variant, color, children }) => {
  // Define the base button styles
  const baseStyles = "py-2 px-4 rounded-md font-semibold transition-all focus:outline-none focus:ring-2";

  // Variant styles
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
  };

  // Color styles
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
  };

  // Combine base styles with the dynamic variant and color
  const variantStyle = variants[variant] || variants.default;
  const colorStyle = colors[color] || colors.blue;

  // Apply the final class names
  const buttonClassNames = `${baseStyles} ${variantStyle} ${colorStyle}`;

  return <button className={buttonClassNames}>{children}</button>;
};

export default Button;



//   import React from 'react';
// import Button from './Button'; // import your button component

// const App = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Button variant="default" color="blue">Primary Button</Button>
//       <Button variant="outline" color="red">Outline Button</Button>
//       <Button variant="ghost" color="green">Ghost Button</Button>
//     </div>
//   );
// };

// export default App;
