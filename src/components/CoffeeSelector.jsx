import React from 'react';

const options = ['Espresso', 'Americano', 'Latte', 'Cappuccino'];

const CoffeeSelector = ({ coffeeType, setCoffeeType }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Choose your coffee:</h2>
      <div className="flex justify-center gap-4 mt-2">
        {options.map((opt) => (
          <button
            key={opt}
            className={`px-4 py-2 rounded-full border ${coffeeType === opt ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => setCoffeeType(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoffeeSelector;
