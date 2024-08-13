import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-blue-300 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold  " >
                    Lefa's Portfolio 
                </h1>
                <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl text-base '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div>
                    <button className='px-6 py-3 rounded-full w-fit sm:w-fit mr-4 bg-purple-500 hover:bg-purple-800 border ' >Hire Me </button>
                    <button className='px-6 py-3 rounded-full w-fit sm:w-fit bg-purple-500  hover:bg-purple-800 border lg:bg-transparent ' >Download CV  </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>                
                <div className=' relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  ' >
                <Image
                src="/images/mainImg.JPG"
                alt='something'
                width={300}
                height={300}
                class=" absolute transform rounded-full w-[200px] lg:w-[350px]  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
