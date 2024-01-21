import React from 'react';

function Footer() {
  return (
    <div className='grid grid-cols-3 py-14 pl-60 bg-[#e2fbf5] justify-center items-center'>
        <div className='w-48 text-base'>
            <p>
            Start your online business by
            creating a digital menu with us
            in less than 90 seconds.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-lg font-bold pb-3'>Quick Links</h1>
            <a href="" className='pb-2 text-sm'>View Sample Menu</a>
            <a href="" className='pb-2 text-sm'>About Us</a>
            <a href="" className='pb-2 text-sm'>Blog</a>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-lg font-bold pb-3'>Get in touch</h1>
            <a href="" className='pb-2 text-sm'>Email: warandrule@gmail.com</a>
            <a href="" className='pb-2 text-sm'>Contact Us</a>
            <a href="" className='pb-2 text-sm'>Terms & Conditions</a>
            <a href="" className='pb-2 text-sm'>Privacy Policy</a>
        </div>
    </div>
  );
}

export default Footer;
