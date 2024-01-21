import React from 'react';

function Sample() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-[#f5f5f5] py-14' id='about'>
        <h1 className='text-4xl font-bold text-[#010162]'>View a <span className='border-b-4 border-[#c5d7bf] '>sample</span> menu</h1>
        <h2 className='text-[#1d1d55] font-bold mb-6'>Select what best describes your business.</h2>
        <div className='flex items-center gap-48 mb-8'>
            <div className='text-left'>
                <img src="../public/s1.svg" className='mb-5'/>
                <p className='text-sm'>Restaurant,<br></br> <span className='border-b-4 border-[#c5d7bf]'> Bar, Cafe</span></p>
            </div>
            <div  className='text-left'>
                <img src="../public/s2.svg"   className='mb-5'/>
                <p className='text-sm'>Store, Brewery<br></br> <span  className='border-b-4 border-[#c5d7bf]'>Kitchen</span> </p>
            </div>
            <div  className='text-center'>
                <img src="../public/s3.svg"  className='mb-5'/>
                <p className='text-sm'> <span  className='border-b-4 border-[#c5d7bf]'>Hotel</span></p>
            </div>
            <div  className='text-center'>
                <img src="../public/s4.svg" className='mb-5' />
                <p className='text-sm'><span  className='border-b-4 border-[#c5d7bf]'>Chef</span></p>
            </div>
            
        </div>

        <button className='px-16 py-2 bg-[#010162] rounded-lg text-base font-bold  mr-2 text-white'>Get in touch</button>
    </div>
  );
}

export default Sample;
