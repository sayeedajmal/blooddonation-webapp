import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../constants";
import SignupForm from "./Auth/Auth/SignupForm";
import { useAuth } from "./Auth/Auth/AuthProvider";

const LoginStaff = () => {
  const navigate = useNavigate();
  const { login, token } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${images.sharing})`,
      }}
    >
      <div className=" p-8 rounded-lg shadow-lg text-lg  max-w-md  w-4/5 md:w-full bg-red-400 shadow-white">
        <h2 className="text-2xl font-bold  text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {isLogin ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 bg-white text-xs italic w-fit p-1 rounded-full text-center m-auto">
                {error}
              </p>
            )}
            <div className="flex items-center justify-between flex-col">
              <button
                type="submit"
                className="w-full mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <a
                href="##"
                className="relativefont-bold text-sm m-2 font-bold text-white hover:text-blue-800"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </a>
            </div>
          </form>
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default LoginStaff;
