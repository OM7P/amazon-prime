import React from "react";
import Image from "next/image";

function NavbarPage() {
  return (
    <div className="">
      <div className="bg-black flex justify-around flex-row  text-white p-4">
        <div>
          <Image
            src="/Logo-min.png"
            width={120}
            height={100}
            className="mt-1"
          />
        </div>
        <div className="flex justify-around flex-row gap-6 relative max-[700px]:hidden">
          <div className="group">
            <h5 className="cursor-pointer flex items-center">
              Home
              <span className="ml-1 mt-1 transition-transform transform group-hover:rotate-180">
                <Image
                  src="/arrow-141-xxl.png"
                  className=""
                  width={15}
                  height={10}
                />
              </span>
            </h5>
            <div className=" absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="py-2 flex justify-center items-center flex-col ">
                <li className="px-4 py-2  hover:bg-slate-50  hover:text-black">
                  All
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  Movies
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  TV shows
                </li>
              </ul>
            </div>
          </div>
          <div className="group">
            <h5 className="cursor-pointer flex items-center">
              Store
              <span className="ml-1 mt-1 transition-transform transform group-hover:rotate-180">
                <Image
                  src="/arrow-141-xxl.png"
                  className=""
                  width={15}
                  height={10}
                />
              </span>
            </h5>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="py-2 flex justify-center items-center flex-col">
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  All
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  Rent
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  Channels
                </li>
              </ul>
            </div>
          </div>
          <h5 className="text-bold">Live Tv</h5>
          <div className="group">
            <h5 className="cursor-pointer flex items-center">
              Categories
              <span className="ml-1 mt-1 transition-transform transform group-hover:rotate-180">
                <Image
                  src="/arrow-141-xxl.png"
                  className=""
                  width={15}
                  height={10}
                />
              </span>
            </h5>
            {/* absolute hidden group-hover: */}

            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="grid grid-cols-2 h-72 w-96 ">
                <li className="px-2 py-2 text-bold hover:bg-slate-50  hover:text-black">
                  Action and adventure
                </li>
                <li className=" px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Anime
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Comedy
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Documentary
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Drama
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Fantasy
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Horror
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Kids
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Mystery and thrillers
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Romance
                </li>
                <li className="px-4 py-2 text-bold hover:bg-slate-50  hover:text-black">
                  Science fiction
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-around flex-row gap-6 mr-10">
        <div>
          <Image
            src="/icons8-search-24.png"
            className="mt-1 mr-5"
            width={25}
            height={10}
            onClick={() => alert("Search items!!")}
          />
        </div>
          <h2 className="max-[700px]:hidden">Subscribe</h2>
          <div className="group">
            <h5 className="cursor-pointer flex items-center max-[700px]:hidden">
              English
              <span className="ml-1 mt-1 transition-transform transform group-hover:rotate-180">
                <Image
                  src="/arrow-141-xxl.png"
                  className=""
                  width={15}
                  height={10}
                />
              </span>
            </h5>

            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="grid grid-cols-2 -gap-10 h-96 w-56 flex justify-center items-center flex-col">
                <li className="px-4 py-2 text-bold hover:bg-slate-50  hover:text-black">
                  हिन्दी
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Marathi
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  தமிழ்
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  తెలుగు
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  ไทย
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  日本語
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  简体中文
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  繁體中文
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Português (Portugal)‎
                </li>
                <li className="px-4 py-2 text-bold  hover:bg-slate-50  hover:text-black">
                  Français
                </li>
                <li className="px-4 py-2 text-bold hover:bg-slate-50  hover:text-black">
                  Dansk
                </li>
                <li className="px-4 py-2 text-bold hover:bg-slate-50  hover:text-black">
                  Bahasa Melayu
                </li>
              </ul>
            </div>
          </div>
          <div className="group">
            <Image
              src="data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M50%20100c27.614%200%2050-22.386%2050-50S77.614%200%2050%200%200%2022.386%200%2050s22.386%2050%2050%2050Z%22%20fill%3D%22url(%23a)%22%2F%3E%3Cpath%20d%3D%22M86.718%2083.939C77.583%2093.816%2064.514%20100%2050%20100c-14.73%200-27.974-6.37-37.124-16.506%201.212-3.09%202.922-5.902%205.304-8.228C25.46%2068.157%2038.425%2065.235%2050%2065.235c11.554%200%2023.655%202.906%2030.933%209.993%202.512%202.446%204.405%205.43%205.785%208.71Z%22%20fill%3D%22url(%23b)%22%2F%3E%3Cpath%20d%3D%22M69.52%2037.11c.794-12.213-5.89-22.266-19.468-22.266-13.579%200-20.263%2010.053-19.468%2022.265.795%2012.213%208.794%2020.703%2019.468%2020.703%2010.673%200%2018.673-8.49%2019.468-20.703Z%22%20fill%3D%22url(%23c)%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%22100%22%20y2%3D%22100%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%234C718E%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%232B4053%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2241.554%22%20y1%3D%2230.347%22%20x2%3D%2282.712%22%20y2%3D%2271.539%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.85%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2241.554%22%20y1%3D%2230.347%22%20x2%3D%2282.712%22%20y2%3D%2271.539%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.85%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
              style={{ borderRadius: "50px" }}
              className="bg-white top-100 "
              width={30}
              height={10}
            />
            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  Sign in
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  hele
                </li>
                <li className="px-4 py-2 hover:bg-slate-50  hover:text-black">
                  Watch Anyhere
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
