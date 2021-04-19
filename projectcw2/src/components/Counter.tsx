import React from 'react';

interface CounterProps {
   initialNumber?: number;
   onNumberChange?: (someNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
   const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

   const addNumber = () => {
      const number = counterNumber + 1;
      setCounterNumber(number);

      onNumberChange && onNumberChange(counterNumber);
   };

   const descreaseNumber = () => {
      const number = counterNumber - 1;
      setCounterNumber(number);
      onNumberChange && onNumberChange(counterNumber);
   };

   return (
      <div>
         <button onClick={addNumber}>+</button>
         {counterNumber}
         <button onClick={descreaseNumber}>-</button>
      </div>
   );
};

export default Counter;
