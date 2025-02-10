import  { useState } from 'react';
import logo from './../assets/Images/logo.png';
import Man from './../assets/Images/man.png';
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
 } from "react-icons/hi2";
import { HiPlus,
        HiDotsVertical
 } from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }

    ];
  return (
    <div className='flex items-center justify-between  p-5'>
        <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[120px] object-cover'/>
        <div className='hidden md:flex gap-8'>
        {menu.map((item) =>(
            <HeaderItem key={item.name} name={''} Icon={item.icon}/>
        ))}
        </div>
        <div className='flex md:hidden gap-5'>
        {menu.map((item,index) =>index<3&&(
            <HeaderItem key={item.name} name={''} Icon={item.icon}/>
        ))}
        
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        
            <HeaderItem key="menu-toggle" name={''} Icon={HiDotsVertical}/>
            {toggle? <div className='absolute mt-3 bg-black p-3 border-[1px] border-gray-700  px-5 py-4'>
            {menu.map((item,index) =>index>2&&(
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} ShowName={true}/>
             ))} 
            </div>:null}
        </div>
        </div>
        </div>
        <img src= {Man} className='w-[50px] rounded-full m-7'/>
    </div>
  )
}

export default Header;