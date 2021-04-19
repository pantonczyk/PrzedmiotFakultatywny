import React from 'react';
import './App.css';
import CustomHeader /*,{ addNumber }*/ from './components/CustomHeader';
import Counter from './components/Counter';
import MyCounter from './components/MyCounter';

const App = () => {
   // const addedNumber = addNumber(1, 2);
   const [changedNumber, setChangedNumber] = React.useState(0);

   const handleNumberChange = (newNumber: number) => {
      setChangedNumber(newNumber);
   };

   // const liczbaMniejszaOdZera = (liczba: number) => {
   //    if (liczba < 0) {
   //       return <div>liczba jest mniejsza od 0</div>;
   //    }
   // };

   const [myChangedNumber, setMyChangedNumber] = React.useState(0);
   const handleNumberChange1 = (newNumber: number) => {
      setMyChangedNumber(newNumber);
   };

   return (
      <div className="App">
         <CustomHeader>
            <Counter />
            <Counter initialNumber={10} />
            <Counter
               onNumberChange={(newNumber) => {
                  console.log(newNumber);
               }}
            />
            <Counter onNumberChange={handleNumberChange} />
            {changedNumber > 0 && <div> liczba jest wieksza od 0</div>}
         </CustomHeader>
         <hr />

         <MyCounter onNumberChange={handleNumberChange1} />
         {myChangedNumber > 10 && myChangedNumber < 15 && <div> Liczba jest większa od 10</div>}
         {myChangedNumber < -10 && <div> Liczba jest mniejsza od -10</div>}
         {myChangedNumber > 15 && <div>Liczba przekroczona</div>}
      </div>
   );
};

export default App;
