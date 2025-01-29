import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../auth/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-lg rounded-lg   w-96 h-auto flex flex-col gap-6"
        style={{ background: "rgba(235,27,36,1)", color: "white" }}
      >
        <div className="text-xl font-bold mb-2">
          Welcome,
          <br />
          <span className="text-lg">Sign up to continue</span>
        </div>
        <input
          className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center gap-4 mt-4">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-white shadow-md rounded-full cursor-pointer text-lg font-bold">
            t
          </div>
          <div className="w-12 h-12 flex items-center justify-center border-2 border-white shadow-md rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.6934 56.6934"
              className="w-8 h-8 fill-white"
            >
              <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z" />
            </svg>
          </div>
        </div>
        <button className="w-40 h-12 mx-auto mt-6 border-2 border-white shadow-md rounded-md text-lg font-semibold hover:text-[rgba(235,27,36,1)] hover:shadow-sm hover:bg-white active:shadow-none active:translate-y-1">
          Let's go →
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
