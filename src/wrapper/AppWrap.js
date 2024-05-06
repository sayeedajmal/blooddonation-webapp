import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`flex flex-row w-full `}>
        <div className="flex-1 w-full flex-col p-6 flex justify-center items-center">
          <Component />

          <div className="w-full flex flex-col content-end">
            <p
              className=" uppercase text-black"
              style={{ textTransform: "none", color: "gray" }}
            >
              @2024 SayeedTheDev
            </p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
