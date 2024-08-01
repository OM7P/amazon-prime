import React from "react";
import Image from "next/image";
import NewComponent from "../newcom";

function MiddleCom() {
  return (
    <div className="">
      <div>
        <div className="bg-[url('/MLP.jpg')] h-screen w-full bg-cover bg-">
          <div className=" ml-10  flex  flex-col gap-3">
            <h1 className="  lg:text-5xl mt-52 text-white text-2xl font-bold">
              Welcome to Prime Video
            </h1>
            <p className="lg:text-xl  text-xs text-white  ">
              {" "}
              Join Prime to watch the latest movies, TV shows and award-winning
              Amazon Originals
            </p>
            <div>

            <button className="text-white bg-[#0F79AF]  p-2 rounded-sm font-semibold hover:bg-blue-900 ">
              Sign in to join prime
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleCom;

// style={{
//   backgroundColor: "rgba(1, 2, 4, .8)" }}
