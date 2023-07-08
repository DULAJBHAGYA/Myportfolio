import React from 'react';

const Card = () => {
  return (
    <div className="bg-primaryColor p-4 rounded-lg mt-5">
      <div className="flex flex-col">
        <div className="mb-4">
          <div className="w-full flex justify-center">
            {/* Content for the first row */}
            <h2 className="text-white text-2xl font-bold">Favourite STACK</h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">

          <div className="bg-primaryColor rounded-lg p-2">
          <i className="ri-reactjs-line text-5xl font-bold text-white"></i>
          </div>

          <div className="bg-primaryColor rounded-lg p-2">
          <i className="ri--line text-5xl font-bold text-white"></i>
          </div>

          <div className="bg-primaryColor rounded-lg p-2">
          <i className="ri-reactjs-line text-5xl font-bold text-white"></i>
          </div>

          <div className="bg-primaryColor rounded-lg p-2">
          <i className="ri-reactjs-line text-5xl font-bold text-white"></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
