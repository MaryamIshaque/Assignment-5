import React from 'react' 
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className='bg-[#A29875] w-full flex gap-8 items-center justify-center'>
         
        <Image src="/images/logo (2).png" alt='' width={242} height={87} className='mr-7'></Image>
        <input type="text" placeholder='Search for Gold Jewlery, Diamond Jewelry and more...' className='rounded-lg w-[750px] h-[45px] p-2 '/>
        <div className='flex gap-3 text-white '>
          <CiHeart className='w-[28px] h-[25px]'/>
          <CiUser className='w-[28px] h-[25px]'/>
          <RiShoppingCart2Line className='w-[28px] h-[25px]'/>

        </div>
        </nav>
  )
}
export default Navbar ;
