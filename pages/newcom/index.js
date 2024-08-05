import React from "react";

function NewComponent() {
  return (
    <div>
      <div>
        <div className="bg-[url('/TVOD_MLP_Right.jpg')] h-screen w-full bg-cover">
          <div className="ml-10  flex flex-col gap-3 ">
            <h1 className="lg:text-4xl mt-48 text-white text-2xl font-bold ">
              Movie rentals on Prime Video
            </h1>
            <p className="   text-white w-9/12 lg:text-xl">
              {" "}
              Early Access to new movies, before digital subscription
            </p>
            <div>

            <button className="text-white bg-[#0F79AF] w-32 p-2 rounded-sm font-bold hover:bg-blue-900 break-all">
              Rent now{" "}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
