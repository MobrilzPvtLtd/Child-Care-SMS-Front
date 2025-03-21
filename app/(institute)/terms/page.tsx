import React from "react";

function page() {
  return (
    <div className="my-16">
      <div className="w-full flex justify-center py-4">
        <div className="w-full md:w-2/3 rounded-xl shadow-xl py-5 bg-[var(--primary-background-color)]">
          <div className="flex justify-center mb-6">
            {/* <img src={"termlogo"} alt="User Icon" className="w-16" /> */}
          </div>
          <h1 className="text-4xl font-semibold  text-center my-5">
            Term & Condition
          </h1>

          <p className="text-whitemy-3 mx-6 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt alias
            magni voluptatum totam inventore officia aut voluptate laboriosam.
            Aliquam beatae, consequuntur ab nobis aspernatur voluptates id
            veritatis quos tempore iure.
          </p>
          <div className=" mx-6 rounded my-4">
            <h5 className=" text-xl text-center">
              Your posting of parent content
            </h5>
            <p className="h-fit px-5 py-3 mt-4  text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              rem id nesciunt commodi excepturi est ea animi. Sed harum vel
              dolorem fugiat quia iure eos ullam, aspernatur quisquam iste
              aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id accusamus animi dolorem libero laboriosam inventore, voluptatum
              quia fuga dolores assumenda itaque placeat hic ex quae aliquid sed
              aspernatur, totam ipsam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Impedit molestias quas obcaecati blanditiis?
              Vitae quisquam assumenda inventore natus possimus atque expedita?
              Aperiam asperiores deserunt voluptatum voluptatibus amet illo sint
              esse. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis est ducimus aspernatur voluptatibus accusamus molestiae
              tenetur deserunt reiciendis illo aperiam, amet ullam magnam quo?
              Impedit aliquid provident quo enim cumque! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Obcaecati similique
              perspiciatis repudiandae, veniam nesciunt sunt dolor laudantium
              adipisci doloremque accusantium neque expedita, dignissimos
              architecto eum voluptate iusto, ad in? Aut.
            </p>
          </div>

          {/* <div className="flex justify-center my-3">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Accept</button>
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default page;
