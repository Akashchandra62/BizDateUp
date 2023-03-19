import React from "react";

const Main = () => {
  return (
    <main
      className="d-flex flex-column justify-content-between align-items-center"
      style={{
        height: "100vh",
        color: "rgba(32, 32, 84, 1)",
      }}
    >
      <div className="w-100 py-3 px-5">
        <img src="./images/logo.png" alt="logo"></img>
      </div>
      <div
        className="main-container d-flex flex-column gap-3  align-items-center w-50"
        style={{
          fontFamily: "Roboto",
        }}
      >
        <h1 className="fs-2">Sign up</h1>
        <button className="btn border border-1 border-secondary px-5 text-secondary d-flex gap-2 align-items-center w-50 rounded rounded-end justify-content-center">
          <img src="./images/google.png" alt="google"></img> Login With Google
        </button>
        <button className="btn border border-1 border-secondary px-5 text-secondary d-flex gap-2 align-items-center w-50 rounded rounded-end justify-content-center">
          <img src="./images/facebook.png" alt="facebook"></img> Login With
          Facebook
        </button>
        <button className="btn border border-2 border-secondary px-5 text-secondary d-flex gap-2 align-items-center w-50 rounded rounded-end justify-content-center">
          <img src="./images/email.png" alt="email"></img> Login With Email
        </button>
        <form action="" className="w-50">
          <input
            className="border border-secondary border-1 w-100 rounded rounded-end p-2"
            type={"text"}
            placeholder={"Email"}
          ></input>
          <button
            className="btn text-white  px-5 text-secondary d-flex gap-2 align-items-center w-100 mt-2 rounded rounded-end justify-content-center"
            style={{
              backgroundColor: "#202054",
            }}
          >
            Confirm
          </button>
        </form>

        <p
          className="text-secondary fw-bold"
          style={{
            fontSize: "13px",
          }}
        >
          By singing up I agree to Bizdateup
          <span
            style={{
              color: "rgba(32, 32, 84, 1)",
            }}
          >
            {" "}
            Privacy policy
          </span>{" "}
          &{" "}
          <span
            style={{
              color: "rgba(32, 32, 84, 1)",
            }}
          >
            {" "}
            Terms of Service
          </span>
        </p>
        <div
          className="w-50 bg-dark"
          style={{
            height: "1px",
          }}
        ></div>
        <p className="text-secondary fw-bold">
          Don't have an account ?{" "}
          <span
            style={{
              color: "rgba(32, 32, 84, 1)",
            }}
          >
            Log in
          </span>
        </p>
      </div>
      <div className="py-4">
        <p>2023 © Bizdateup. All Copyrights reserved.</p>
      </div>
    </main>
  );
};

export default Main;
