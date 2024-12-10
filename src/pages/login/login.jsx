import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.type);

        if (res.data.user.type === "customer") {
          window.location.href = "/";
        } else if (res.data.user.type === "admin") {
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full h-screen bg-cover flex justify-center items-center pic-bg">
      <div className="w-96 h-96 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-center relative p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full bg-transparent border-2 border-white text-white placeholder:text-gray-400 h-12 px-4 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full bg-transparent border-2 border-white text-white placeholder:text-gray-400 h-12 px-4 mb-6 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-red-500 text-white h-12 rounded hover:bg-red-600 transition duration-200"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-white text-sm mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-red-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
