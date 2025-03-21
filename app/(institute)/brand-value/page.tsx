import UserTable from "@/components/institute/UserTable";
import React from "react";

function page() {
  return (
    <div className="container p-20 flex flex-col justify-center items-center gap-20">
      <div className="">
        <h6 className="text-black opacity-50 text-xl">Our DNA</h6>
        <h1 className="text-black font-bold text-6xl">Lorem Ipsum </h1>
        <p className="text-black py-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
          saepe, nemo ut minima facilis hic ab labore assumenda pariatur
          laudantium deserunt. Officia, aliquam dolores vitae doloremque
          molestias voluptatibus eum.
        </p>
        <div className="border-2 border-black "></div>
      </div>

      <div className="grid grid-cols-2 gap-20 ">
        <div>
          <h1 className="text-primary-background-color text-4xl font-semibold">
            Lorem{" "}
          </h1>
          <p className="text-black ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
            saepe, nemo ut minima facilis hic ab labore assumenda pariatur
            laudantium deserunt. Officia, aliquam dolores vitae doloremque
            molestias voluptatibus eum.
          </p>
        </div>

        <div>
          <h1 className="text-primary-background-color text-4xl font-semibold">
            Lorem{" "}
          </h1>
          <p className="text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
            saepe, nemo ut minima facilis hic ab labore assumenda pariatur
            laudantium deserunt. Officia, aliquam dolores vitae doloremque
            molestias voluptatibus eum.
          </p>
        </div>
        <div>
          <h1 className="text-primary-background-color text-4xl font-semibold">
            Lorem{" "}
          </h1>
          <p className="text-black ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
            saepe, nemo ut minima facilis hic ab labore assumenda pariatur
            laudantium deserunt. Officia, aliquam dolores vitae doloremque
            molestias voluptatibus eum.
          </p>
        </div>

        <div>
          <h1 className="text-primary-background-color text-4xl font-semibold">
            Lorem{" "}
          </h1>
          <p className="text-black text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
            saepe, nemo ut minima facilis hic ab labore assumenda pariatur
            laudantium deserunt. Officia, aliquam dolores vitae doloremque
            molestias voluptatibus eum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
