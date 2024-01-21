import React from 'react';

function Hero() {

  return (
    <div>
      <div className='pl-28  flex justify-between mb-20'>
        <div className='mt-12'>
            <h1 className=' text-5xl font-bold pb-5'>
                    Create your <br /> <span className='text-[#dc2929]'> beautiful mobile <br /> menu</span> in less than 90 <br /> seconds
            </h1>
            <p className='pb-5'>
                Restaurants | Hotels | Chefs | Bakeries | Spa | Super markets
            </p>

            <button className='px-16 py-2 bg-[#dc2929] rounded-lg text-lg font-bold  mr-2 text-white'>REGISTER</button>
            <button className='px-16 py-2 border-black border-2 rounded-lg text-lg font-bold'>LOGIN</button>

        
        </div>
        <div className='flex justify-end'>
            <img src="../public/mobile.png" alt="Hero Image" className='w-[88%]' />
        </div>
      </div>


    </div>

  );
}

export default Hero;
