import React from "react";

const Leftbar = () => {
  return (
    <div
      className="w-100 pt-5"
      style={{
        height: "100vh",
        background: "linear-gradient(22.34deg, #555080 0.62%, #28285B 31.97%)",
      }}
    >
      <div className="px-4">
        <h1 className="text-white fs-2 pt-5">
          "Lorem ipsum dolor sit amet, consectetur{" "}
        </h1>
        <p className="text-white mt-3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="mt-4 d-flex gap-2">
          <div
            className=" rounded-pill"
            style={{
              width: "35px",
              height: "5px",
              backgroundColor: "rgba(77, 77, 144, 1)",
            }}
          ></div>
          <div
            className=" rounded-pill"
            style={{
              width: "35px",
              height: "5px",
              backgroundColor: "rgba(77, 77, 144, 1)",
            }}
          ></div>
          <div
            className="bg-white rounded-pill"
            style={{
              width: "35px",
              height: "5px",
            }}
          ></div>
        </div>
      </div>
      <div className="w-100">
        <img src="./images/2.png" alt="logo"></img>
      </div>
    </div>
  );
};

export default Leftbar;
