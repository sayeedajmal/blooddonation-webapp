import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`flex flex-row w-full ${classNames}`}>
        <div className="flex-1 w-full h-screen flex flex-col p-6 justify-center items-center relative">
          <Component />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="uppercase text-gray-500">@2024 SayeedTheDev</p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
