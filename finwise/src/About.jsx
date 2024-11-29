import React from 'react'
import logo from './assets/logo.svg'
import chip from './assets/chip.svg'
import target from './assets/Target.svg'
import grp from './assets/grpicon.svg'
import star from './assets/Star.svg'
import mb from './assets/mortarboard.svg'
import people from './assets/people.svg'
import './index.css'
import Test from './Testimonial.jsx'
import Support from './Support.jsx'
import Faq from './Faq.jsx'
import Cards from './Cards.jsx'






const Navigation = () =>{
  return(
    <div className='bg-[#1c1c1c21] navadd'>
    <div className='h-10 flex flex-row justify-center items-center border-b-2 border-[#525252]'>
      <h1>Quorte goes here</h1>
    </div>
    {/* nav */}
    <div className='flex flex-row justify-between items-center px-6 py-3 '>
      
      {/* logo */}
      <div className='flex flex-row'>
      <img src={logo}></img>
      <div className='font-inter pl-3 flex flex-col justify-center items-start'>
        <h1 className='font-semibold'>FinWise School</h1>
        <h1 className='text-[15px] text-[#525252] font-normal'>Finance Smart Live Wise</h1>
      </div>
      </div>

      {/* menu */}
      <div className='flex flex-row justify-between w-[30%] font-medium'>
        <h1>About us</h1>
        <h1>Tools</h1>
        <h1>Blogs</h1>
        <h1>Resources</h1>
      </div>

      {/* action btn */}
      <div>
        <button className='bg-[#525252] text-white rounded-md p-2'>Request early access</button>
      </div>
    </div>
    </div>
  );
}



const Values = () => {
  return (
    <div className='pt-5 '>
      <div className='h-[100px]'></div>
      <h1 className='pl-8 py-6 text-4xl font-sora font-semibold'>Our Values</h1>
      <p className='pl-8 w-[90%] text-[#8d8d8d] '>Our journey is one of relentless progress and transformation. We began as a passionate group with a vision, dedicated to building an educational platform that redefines the boundaries of traditional financial learning.</p>
      
      {/* card */}
      <div className='p-5'>
        {/* card layout 1 */}
        <div>
        <div className='flex flex-row '>
      <div class="mx-auto  flex  w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
        <div className='p-2'>
            <img src={star} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>🎯 Financial Empowerment</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]' >We believe that every young person deserves the knowledge and tools to make confident financial decisions. We're committed to breaking down complex financial concepts into digestible, engaging content that resonates with Gen Z.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 3 */}
      <div class="mx-auto  flex w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div className='p-2'>
            <img src={mb} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>🎮 Learning Through Innovation</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]'>We embrace gamification and interactive learning because we believe that education should be engaging and fun. Our innovative approach makes financial education an adventure rather than a chore.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
        </div>
        {/* Card layout 2 */}
        <div>
        <div className='flex flex-row '>
      <div class="mx-auto  flex  w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
        <div className='p-2'>
            <img src={people} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>🤝 Community First</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]' >We foster a supportive, judgment-free environment where students can learn, share, and grow together. Our community is built on trust, mutual respect, and the shared goal of financial literacy.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 3 */}
      <div class="mx-auto  flex w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div className='p-2'>
            <img src={star} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>🌟 Authenticity & Relevance</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]'>We speak your language and understand your world. Our content is tailored specifically for UK Gen Z, using real-life examples and local context that matters to you.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}




const About = () => {
  return (
    <>
     <Navigation />
     <div className=' bgadd h-auto '>
     <div class="mx-auto  flex  items-center justify-center">
      <div class="text-white mt-32 w-[96%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div>
          <h1 className='font-sora p-5'>FinWise School</h1>
          <h1 className='font-sora font-semibold text-5xl text-white p-5'>About us</h1>
          <div className='font-inter p-5 flex flex-row items-center'>
            <img src={chip} className='w-10'></img>
            <h1 className='italic pl-3'>Company id</h1>
            <h1 className='font-semibold pl-3'>SC819264</h1>
          </div>
          <p className='p-5 font-normal text-[#b8b8b8]'>At Finwise School, we're revolutionizing financial education for the UK's young minds. Born from a  vision to make financial literacy accessible, engaging, and actually fun, we're on a mission to  empower 12-24 year olds with the knowledge and tools they need to build a secure financial future.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 2 */}
      <div className='flex flex-row '>
      <div class="mx-auto  flex  w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
        <div className='p-2'>
            <img src={target} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>Our Vision</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]' >We believe that financial literacy shouldn't be a privilege but a right. By making financial education  accessible, engaging, and relevant to Gen Z, we're working to create a generation of confident,  informed decision-makers who can navigate their financial futures with clarity and purpose.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 3 */}
      <div class="mx-auto  flex w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div className='p-2'>
            <img src={grp} className='h-[50px]'></img>
            <h1 className='font-semibold text-3xl py-4'>What Sets Us Apart?</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]'>We speak your language. No complicated jargon or boring lectures here. Through our innovative  gamified learning platform, we transform complex financial concepts into engaging, interactive  experiences. From mastering budgeting basics to understanding ISAs and pension planning, we  make learning about money as exciting as your favorite mobile game.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      {/* final end */}
      
      </div> 
      <Values />
      <Cards />
      <Test />
      <Support />
      <Faq />
      
    </>
  )
}

export default About
