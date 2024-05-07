import React, { useState } from "react";

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo relative flex  cursor-pointer select-none items-end ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />

        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default DarkMode;
