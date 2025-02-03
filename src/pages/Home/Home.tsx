import Layout from "../../UI/Layout/Layout";
import logo from "../../assets/images/child-logo.png"

const Home = () => {
  return (
    <Layout>
      <div className=" flex justify-start items-start h-full p-20 bg-primary-background-color ">
        <div className="text-white flex flex-col item-start justify-start p-20">
          
          <img src={logo} alt="logo" className="w-100" />
          <h1 className="text-5xl md:text-[4rem] font-bold flex flex-col mt-4">
             School
             Management 
             System
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
