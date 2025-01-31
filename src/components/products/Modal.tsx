import { useState } from "react";

const OrderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Order Car
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-600 rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Choose an Option</h2>
            <div className="flex flex-col gap-3">
              {/* Buy Now Button */}
              <button
                onClick={() => {
                  alert("Buy Now clicked!");
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                Buy Now
              </button>
              {/* Add to Wishlist Button */}
              <button
                onClick={() => {
                  alert("Added to Wishlist!");
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200"
              >
                Add to Wishlist
              </button>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-200 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderModal;
