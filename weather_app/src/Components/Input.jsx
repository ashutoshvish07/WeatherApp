import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
        />
        <UilLocationPoint
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="matric" className="text-xl text-white font-light">
          &#8451;
        </button>
        <p className="text-xl text-white mx-1"> |</p>
        <button name="imperial" className="text-xl text-white font-light">
          &#8457;
        </button>
      </div>
    </div>
  );
};

export default Input;
