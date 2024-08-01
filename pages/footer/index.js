import React from "react";
import Image from "next/image";

function FooterCom() {
  return (
    <div >
      <div className="flex flex-col justify-center items-center w-full h-32 bg-black">
        <div className="">
          <Image src="/footer icon.png" width={100} height={100} />
        </div>
        <div className=" flex  text-blue-900">
          <p>Terms and Privacy Notice</p>
          <p>Send us feedback</p>
          <p>Help</p>
        </div>
        <div className=" text-gray-500">
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default FooterCom;
