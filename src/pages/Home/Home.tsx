import Layout from "../../UI/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className=" flex justify-start items-start h-full p-20 bg-primary-background-color ">
        <div className="text-white flex flex-col item-start justify-start p-20">
          <p className="text-5xl mb-2 font-light ">Child Care</p>
          <h1 className="text-5xl md:text-[6rem] font-bold flex flex-col">
            <span> School</span>
            <span> Management </span>
            <span>System</span>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
