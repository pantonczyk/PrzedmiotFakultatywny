import React from 'react';
import MyButton from './MyButton';

interface MyCounterProps {
   initialNumber?: number;
   onNumberChange?: (someNumber: number) => void;
}

const MyCounter: React.FC<MyCounterProps> = ({ initialNumber, onNumberChange }) => {
   const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

   const addNumber = () => {
      const number = counterNumber + 1;
      setCounterNumber(number);

      onNumberChange && onNumberChange(number);
   };

   const descreaseNumber = () => {
      const number = counterNumber - 1;
      setCounterNumber(number);
      onNumberChange && onNumberChange(number);
   };

   const resetNumber = () => {
      const number = initialNumber || 0;
      setCounterNumber(number);
      onNumberChange && onNumberChange(number);
   };

   return (
      <div>
         <MyButton onClick={resetNumber}>reset</MyButton>
         <MyButton onClick={addNumber}>+</MyButton>
         {counterNumber}
         <MyButton onClick={descreaseNumber}>-</MyButton>
      </div>
   );
};

export default MyCounter;
