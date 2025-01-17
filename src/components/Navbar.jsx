import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from "../constants";
import {logo,menu,close} from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState(false);

  return (
   <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link
        to="/"
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}
      >
        <img src={logo} alt="logo" className='w-9 h-9 object-contain'></img>
        <p className='font-bold text-white text-[18px] cursor-pointer'> Thompson &nbsp;<span className="sm:block hidden">Naidu</span></p>
      </Link>

      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link)=>(
          <li onClick={()=>setActive(link.title)} key={link.id} className={`${active === link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>


      <div className='sm:hidden  flex flex-1 justify-end items-center'>
        <img onClick={()=>setToogle(!toogle)} src={toogle?close:menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'/>
      </div>

      <div className={`${!toogle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>

      <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link)=>(
          <li onClick={()=>{
            setActive(link.title);
            setToogle(!toogle);
          }} key={link.id} className={`${active === link.title ? "text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
   </nav>
  )
}

export default Navbar