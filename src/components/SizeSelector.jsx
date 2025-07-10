import React from 'react';

const sizes = ['Small', 'Medium', 'Large'];

const SizeSelector = ({ size, setSize }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Select Size:</h2>
      <div className="flex justify-center gap-4 mt-2">
        {sizes.map((sz) => (
          <button
            key={sz}
            className={`px-4 py-2 rounded-full border ${size === sz ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => setSize(sz)}
          >
            {sz}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
