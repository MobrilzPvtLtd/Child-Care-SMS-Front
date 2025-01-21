
import Layout from '../../UI/Layout/Layout'
import { BiChalkboard } from 'react-icons/bi'
import { RiParentFill } from 'react-icons/ri'
import { GiTeacher } from 'react-icons/gi'


const Services = () => {
  return (
    <Layout>
      <div className="lg:grid-cols-8 mx-12 my-4">
        <h6 className="text-blue-500 text-xl">Our DNA</h6>
        <h1 className="text-blue-500 text-6xl">Lorem Ipsum </h1>
        <p className="text-black py-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
          saepe, nemo ut minima facilis hic ab labore assumenda pariatur
          laudantium deserunt. Officia, aliquam dolores vitae doloremque
          molestias voluptatibus eum.
        </p>
        <div className="border-2 border-blue-400 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-12 my-16">
        <div className='bg-blue-200 shadow-xl rounded py-8'>
          <div className='flex justify-center'>
         <input type="radio" /> <h3 className='text-black text-2xl mx-2 font-semibold my-4'>$15 / Month</h3> </div>
         <ul className='text-black text-center text-xl pb-4 font-semibold'>

          <li className='py-2 flex justify-center items-center '><RiParentFill/><span className='mx-4'>10 Parents</span></li>
          <li className='pb-2 flex justify-center items-center'><GiTeacher/> <span className='mx-4'>8 Teachers</span></li>
          <li className='pb-2 flex justify-center items-center'><BiChalkboard /> <span className='mx-4'>5 Classes</span></li>
         </ul>
        </div>
        <div className='bg-blue-200 shadow-xl rounded py-8'>
          <div className='flex justify-center'>
         <input type="radio" /> <h3 className='text-black text-2xl mx-2 font-semibold my-4'>$20 / Month</h3> </div>
         <ul className='text-black text-center text-xl pb-4 font-semibold'>

          <li className='py-2 flex justify-center items-center '><RiParentFill/><span className='mx-4'>10 Parents</span></li>
          <li className='pb-2 flex justify-center items-center'><GiTeacher/> <span className='mx-4'>8 Teachers</span></li>
          <li className='pb-2 flex justify-center items-center'><BiChalkboard /> <span className='mx-4'>5 Classes</span></li>
         </ul>
        </div>
        <div className='bg-blue-200 shadow-xl rounded py-8'>
          <div className='flex justify-center'>
         <input type="radio" /> <h3 className='text-black text-2xl mx-2 font-semibold my-4'>$10 / Month</h3> </div>
         <ul className='text-black text-center text-xl pb-4 font-semibold'>

          <li className='py-2 flex justify-center items-center '><RiParentFill/><span className='mx-4'>10 Parents</span></li>
          <li className='pb-2 flex justify-center items-center'><GiTeacher/> <span className='mx-4'>8 Teachers</span></li>
          <li className='pb-2 flex justify-center items-center'><BiChalkboard /> <span className='mx-4'>5 Classes</span></li>
         </ul>
        </div>
 
       

      
      </div>
      <div className='flex justify-center'>       <button className=' bg-blue-500 text-2xl px-5 py-3 rounded'>Subscribe</button> </div>

      
</Layout>
  )
}

export default Services
