import React from "react";
import Image from "next/image";

function NewPage() {
  return (
    <div>
      <div className="md:flex">
        <div className="bg-[url('/Mirzapur-3-poster.webp')]  mt-10 h-56 w-96 bg-cover bg-center">
          {/* <Image className="ml-32" src="/Mirzapur-3-poster.webp" width={400} height={100} /> */}    
          
        </div>
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl"> Heading</h1>
          <p className="flex justify-center items-center w-6/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet accumsan tortor. Proin dapibus, magna sit amet interdum
            ullamcorper, eros nisi faucibus orci, et egestas lacus eros eu nunc.
            Nulla facilisi. Donec ac felis at elit fermentum aliquam nec non
            orci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
