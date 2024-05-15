import React from "react";
import Layout from "../../Layout/Layout";
import { FaBackward, FaForward, FaGreaterThan, FaLessThan } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
        <FaLessThan className="bg-white/10 text-3xl p-1 rounded-[50%]"/>
        <FaGreaterThan className="bg-white/10 text-3xl p-1 rounded-[50%]"/>
        </div>
        <div>
          <Link to={"/signup"} className="rounded-full mt-4 px-8 text-base py-2 text-white- font-semibold">
            Sing up
          </Link>
         
          <Link to={"/login"} className="rounded-full text-black mt-4 px-8 text-base py-3 bg-white font-semibold">
            Log in
          </Link>
        </div>
      </div>
      <div className="tertiary_bg mx-4 px-4 py-4">
      <div className="flex justify-between my-4 items-center">
        <p className="text-xl font-bold hover:underline cursor-pointer">Focus</p>
        <p>Show All</p>
      </div>
      <div className="grid gap-6 grid-cols-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex justify-between my-4 items-center">
        <p className="text-xl font-bold hover:underline cursor-pointer">Spotify List</p>
        <p>Show All</p>
      </div>
      <div className="grid gap-6 grid-cols-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    </Layout>
  );
};

export default Home;
