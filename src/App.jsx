import React, { useState } from 'react';
import CoffeeSelector from './components/CoffeeSelector';
import SizeSelector from './components/SizeSelector';
import OrderReview from './components/OrderReview';

// const App = () => {
//   const [coffeeType, setCoffeeType] = useState('');
//   const [size, setSize] = useState('');

//   const handleConfirm = () => {
//     const order = { coffeeType, size };
//     localStorage.setItem('coffee-order', JSON.stringify(order));
//   };

//   return (
//     <div className="min-h-screen bg-zinc-100 p-6 text-center">
//       <h1 className="text-3xl font-bold mb-6">Coffee Kiosk</h1>
//       <div className="space-y-4">
//         <CoffeeSelector coffeeType={coffeeType} setCoffeeType={setCoffeeType} />
//         <SizeSelector size={size} setSize={setSize} />
//         <OrderReview coffeeType={coffeeType} size={size} onConfirm={handleConfirm} />
//       </div>
//     </div>
//   );
// };

const App = () => {
  const [coffeeType, setCoffeeType] = useState('');
  const [size, setSize] = useState('');

  const handleConfirm = () => {
    const order = { coffeeType, size };
    localStorage.setItem('coffee-order', JSON.stringify(order));
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Coffee Kiosk</h1>
      <div className="space-y-4">
        <CoffeeSelector coffeeType={coffeeType} setCoffeeType={setCoffeeType} />
        <SizeSelector size={size} setSize={setSize} />
        <OrderReview coffeeType={coffeeType} size={size} onConfirm={handleConfirm} />
      </div>
    </div>
  );
};


export default App;