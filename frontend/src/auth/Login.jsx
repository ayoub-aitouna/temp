import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({
  type,
  placeholder,
  title,
  name,
  onChange,
  value,
  additionalStyles,
}) => {
  return (
    <div className="flex flex-col w-full gap-[10px]">
      <label className="text-[14px] text-[#a2a2a2]" htmlFor={type}>
        {title}
      </label>
      <input
        className={`w-full h-[50px] bg-[#606060]/50 outline-none px-2 ${additionalStyles}`}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        id={type}
      />
    </div>
  );
};

const Admin = {
  email: "Admin@gmail.com",
  pass: "123654789",
};

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: "", pass: "" });
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (userInput.email === Admin.email && userInput.pass === Admin.pass)
      navigate("/");
    else setError("Invalid Login Crodentials");
  };
  return (
    <div className="w-full h-screen grid place-content-center  bg-[#161616] text-white">
      <div
        className="flex flex-col w-[374px] gap-[45px]
      rounded-[4px] bg-[#303030] px-[25px] py-[27px] justify-center items-center"
      >
        <div className="flex-1 w-full items-center justify-start flex flex-col mt-[10px] gap-[80px]">
          <h2 className="font-semibold tracking-[4%] text-[20px] text-white">
            Join Simple CMS
          </h2>
          <form
            className="flex flex-col w-full items-center gap-[20px]"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Input
              type="email"
              title="Email address"
              name="email"
              value={userInput.email}
              onChange={(e) => {
                setUserInput((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="john@gmail.com"
            />
            <Input
              name="password"
              type="password"
              title="Password"
              value={userInput.pass}
              onChange={(e) => {
                setUserInput((prev) => ({ ...prev, pass: e.target.value }));
              }}
              placeholder="**********"
            />
            <button
              type="submit"
              className="w-[318px] h-[50px] bg-[#004E99] text-white"
            >
              Sing in
            </button>
            <p className="mt-2 text-sm text-center text-red-600 dark:text-red-500">
              {error}
            </p>
          </form>
        </div>
        <p className="w-[306px] text-[14px] text-center text-[#a2a2a2]">
          By continuing, you agree to SimpleCms's{" "}
          <a href="" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
