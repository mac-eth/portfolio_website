import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            In 2018 I started working with Node.js and c++ to make some modifications to a 
            discord bot and some gaming applications. What I thought were minor edits on 
            some basic applications turned into a love for programming. This love for 
            programming then transpired to blockchain technologies such as 
            decentralized applications and decentralized financial systems. 
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how blockchain will revolutionize the state of technology, I 
            started learning the basics of solidity and web3.js. I was very quickly drawn
            to learn more and enthused with solving problems that traditional applications
            have not been able to do. I then started working for several different blockchain
            companies. In my spare time I have been designing decentralized applications 
            which have the capability of solving complex, real world issues.
          </p>
          <a href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
                  src='/../public/assets/about/about.png'
                  width='1200px'
                  height='570px'
                  alt='/'
                />
        </div>
      </div>
    </div>
  );
};

export default About;
