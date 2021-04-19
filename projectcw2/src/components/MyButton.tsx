import React from 'react';

interface MyButtonProps {
   onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ children, onClick, ...props }) => {
   return (
      <button onClick={onClick} {...props}>
         {children}
      </button>
   );
};

export default MyButton;
