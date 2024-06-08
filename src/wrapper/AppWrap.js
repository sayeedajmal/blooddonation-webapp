import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`flex flex-row w-full ${classNames}`}>
        <div className="flex-1 w-screen h-screen flex flex-col justify-center items-center">
          <Component />
          <div className="absolute bottom-0 right-0 p-4">
            <a
              href="https://sayeedthedev.web.app"
              className="text-white p-1 rounded-full font-bold text-xs cursor-pointer bg-red-800"
              target="blank"
            >
              @2024 SayeedTheDev
            </a>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
