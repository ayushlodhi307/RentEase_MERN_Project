import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl font-semibold text-center my-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Enter your e-mail" />
          <input type="password" placeholder="Enter your password" />
          <button className="primary">Login now</button>
          <div className="text-center text-gray-600">
            Don't have an account yet?
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
