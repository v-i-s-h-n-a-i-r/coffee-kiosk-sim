const OrderReview = ({ coffeeType, size, onConfirm }) => {
  if (!coffeeType || !size) return null;

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-medium mb-2">Review Your Order</h2>
      <p><strong>Coffee:</strong> {coffeeType}</p>
      <p><strong>Size:</strong> {size}</p>
      <button
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
        onClick={onConfirm}
      >
        Confirm Order
      </button>
    </div>
  );
};
