import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const months = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "june",
  "july",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Signup = () => {
  return (
    <>
      <div className=" py-8 bg-white">
        <div className="logo text-center">
          <img
            src="/src/assets/white_logo.png"
            className="mx-auto"
            width={140}
            alt=""
          />
        </div>
        <div className=" text-black">
          <div className=" py-10 text-center w-1/2 mx-auto">
            <h1 className="text-3xl tracking-tighter my-4 font-semibold">
              Regístrate para empezar a escuchar contenido
            </h1>
            <span className="or__">or</span>
            <p className="my-4 font-bold">sign up your email address</p>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <form className="text-center mx-auto w-3/4">
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  Enter your email{""}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black "
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  create password{""}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="create a password"
                  className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black "
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What should we call you{""}
                </label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="create a password"
                  className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black "
                />
                <small>it will appear on your profiel</small>
              </div>
              <div className="text-left">
              </div>
              <div className="w-full text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What's your data of birth
                </label>
                <div className="flex gap-8">
                  <div className="w-1/4">
                    <label htmlFor="password" className=" ml-2 inline-block">
                      Day
                    </label>
                    <input
                      type="text"
                      id="password1"
                      name="password"
                      placeholder="DD"
                      className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black"
                    />
                  </div>
                  <div className="w-2/4">
                    <label htmlFor="password" className=" ml-2 inline-block">
                      monty
                    </label>
                    <select
                      type="radio"
                      id="password2"
                      name="password"
                      placeholder="password"
                      className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black"
                    >
                      {months.map((m) => {
                        return (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="password" className=" ml-2 inline-block">
                      year
                    </label>
                    <input
                      type="text"
                      id="password3"
                      name="password"
                      placeholder="YYYY"
                      className="block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black"
                    />
                  </div>
                </div>
                <div className="flex gap-8 mt-4">
                  <div className="">
                    <input
                      type="radio"
                      id="password4"
                      name="password"
                      placeholder="password"
                      className=""
                    />
                    <label htmlFor="password" className=" ml-2 inline-block">
                      male
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="password5"
                      name="password"
                      placeholder="password"
                      className=""
                    />
                    <label htmlFor="password" className=" ml-2 inline-block">
                      male
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="password6"
                      name="password"
                      placeholder="password"
                      className=""
                    />
                    <label htmlFor="password" className=" ml-2 inline-block">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-4/5 mx-auto text-left py-4"></div>
              <div className="my-4 flex items-center">
                <input
                  type="checkbox"
                  className="green-checkbox relative"
                  name=""
                  id=""
                />
                <p className="ml-2 text-sm">
                  I would prefer not to receive marketing messages from Spotify
                </p>
              </div>
              <div className="my-4 flex items-center">
                <input
                  type="checkbox"
                  className="green-checkbox relative"
                  name=""
                  id=""
                />
                <p className="ml-2 text-sm">
                  I would prefer not to receive marketing messages from Spotify
                </p>
              </div>
              <p className="my-4 text-xs">
                By clicking on sign-up, you agree to{""}
                <Link to="/" className="text-green-400">Spotify's terms and condition</Link> of Use
              </p>
              <p className="my-4 text-xs">
                To learn more about how Spotify collects, uses, shares and protects your personal data, please
                <Link to="/" className="text-green-400">Spotify's privacy policy</Link>
              </p>
              <div className="w-full text-left py-4">
                <input
                  type="submit"
                  value="Sign up"
                  className="block cursor-pointer w-1/2 mx-auto outline-none bg-green-500 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full"
                />
              </div>
            </form>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <p className="pt-8">
              <span className="text-gray-300 font-semibold">
                Don't have an account{" "}
              </span>
              <Link
                to="/signup"
                className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
