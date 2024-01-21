import React from 'react';

const Header = () => {
  return (
   <>
   <header className='flex justify-between pl-28 px-16 py-8'>
    {/* <div>LOGO</div>     */}
    <div className="flex">
            <ul className='flex text-[#010162] font-bold text-lg gap-14'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Menu</a></li>
            </ul>
            
    </div>
    <div>
        <button className='px-5 py-2 shadow-lg shadow-gray-500/50 bg-[#dc2929] text-white rounded-lg text-lg cursor-pointer active:scale-[.97]'>
            Login
        </button>
    </div>
   </header>
   </>
  );
}

export default Header;
