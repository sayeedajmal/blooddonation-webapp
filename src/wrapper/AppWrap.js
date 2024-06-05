import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`flex flex-row w-full ${classNames}`}>
        <div className="flex-1 w-full h-screen flex flex-col p-6 justify-center items-center relative">
          <Component />
          <div className="absolute bottom-0 right-0 p-4">
            <a
              href="https://sayeedthedev.web.app"
              className="text-red-700 font-extrabold cursor-pointer"
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
