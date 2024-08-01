import React from "react";
import Image from "next/image";

function ForthCom() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row ">
        <div className=" mt-10 p-4">
          <h1 className="text-4xl font-semibold mb-10 ">
            Your favorite channels all in one place
          </h1>
          <p className="text-xl w-full lg:w-96 ">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice.
          </p>
        </div>
        <div className="group xxxs:grid-cols-1 xs:grid-cols-2 grid grid-cols-4 lg:grid-cols-3 p-10">
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image
              src="/LionsgatePlay-426X2946_V1.jpg"
              width={300}
              height={100}
            />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/426x294_Discoveryv2.jpg" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/426x294_BBC_PLAYERv3.png" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/426x294_MANORAMAMAXv4.jpg" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/hoichoi-426X2946_V5.jpg" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/426x294_Chaupalv6.png" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/426x294_Animev7.jpg" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/v8.png" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/v9.png" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/v10.png" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/v11.jpg" width={300} height={150} />
          </div>
          <div className="p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-custom-shadow">
            <Image src="/v12.png" width={300} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForthCom;
