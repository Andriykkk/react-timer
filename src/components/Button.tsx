import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      type='button'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className='transition-all bg-mainGray font-bold rounded-full cursor-pointer relative h-[100px] w-[100px] p-1 overflow-hidden group'
    >
      <span
        className='btn-inner bg-mainBg w-full h-full rounded-full block flex items-center justify-center transition-all'
        style={{
          boxShadow: `-10px -8px 10px rgba(255, 255, 255, ${
            hovered ? "0.3" : "0.1"
          }), 10px 8px 20px rgba(50, 50, 50, ${
            hovered ? "0.5" : "0.1"
          })`,
        }}
      >
        <span className='text-2xl text-white font-semibold pb-1'>
          {children}
        </span>
      </span>
    </button>
  );
};
// max-width: 250px;
// position: relative;
// background: #d2d5d8;
// padding: 1rem 4rem;
// display: block;
// border-radius: 100%;
// position: relative;
// animation-name: button-inner;
// animation-duration: 0.75s;
// animation-delay: 1s;
// animation-fill-mode: forwards;

export default Button;
