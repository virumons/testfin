import React from 'react'
import '../index.css'
import budgetb from '../assets/budgetboook.svg'
import logo from '../assets/logo.svg'


const Category =()=>{
    return (
        <>
            <div className='my-10 mx-6 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold my-6'>Browse by Category</h1>
                <div className='flex flex-wrap justify-center items-center'>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='h-[250px]'></img>
                    </div>
                    <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

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



const Ads = () => {
  return (
    <div>
         <div class="mx-auto  flex  items-center justify-center">
      <div class="text-white my-20 w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C]  p-[2px]">
       
       <div className='bgresrcads h-[70vh]'>
        <div className='p-5 w-[100%] sm:w-[60%] h-full flex flex-col md:justify-center items-start'>
            <p className='text-[20px]'><span className='text-2xl font-bold'>100% OFF</span> on all guides</p>
            <h1 className='font-sora font-semibold text-5xl my-4'><span className='text-[25px] text-green-400'> Free for all</span> <br/>
            Early members</h1>
           <button className='bg-black px-8 py-4 rounded-xl mt-3'>Get now</button>
        </div>
    
       </div>

    </div>   
      </div>
    </div>
  )
}



const Newarr = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold '>New Arrivals</h1>
      <div className='flex flex-wrap justify-center items-center'>
                           {/* cat-1 */}
                           <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                                    {/* cat-1 */}
                                    <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                                    {/* cat-1 */}
                                    <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                                    {/* cat-1 */}
                                    <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                                    {/* cat-1 */}
                                    <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
                                    {/* cat-1 */}
                                    <div className='flex flex-col m-6'>
                    <div className='bg-[#121212] rounded-t-xl pt-2'>
                        <img src={budgetb} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                    </div>
                    <div className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                        <h1 className='font-semibold text-xl'>Budgeting</h1>
                        <p>The Budgeting Blueprint</p>
                    </div>
                </div>
        </div>
    </div>
  )
}



const Guideofday = () => {
  return (
    <div className='my-10 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold '>Guide of Day - 29 Nov 2024 </h1>
      <div className='flex flex-wrap justify-center items-center'>
                {/* cat-1 */}
                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='w-[250px]'></img>
                    </div>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                        <p className='italic'>By finwise school</p>
                        <h1 className='font-bold text-lg mb-2'>Basics of Technical Analysis</h1>
                        <p className='text-[18px]'>This is your go-to guide for understanding and applying technical analysis in financial markets.</p>
                        </div>
                    </div>
                </div>
                                {/* cat-1 */}
                                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='w-[250px]'></img>
                    </div>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                        <p className='italic'>By finwise school</p>
                        <h1 className='font-bold text-lg mb-2'>Basics of Technical Analysis</h1>
                        <p className='text-[18px]'>This is your go-to guide for understanding and applying technical analysis in financial markets.</p>
                        </div>
                    </div>
                </div>
                                {/* cat-1 */}
                                <div className='flex flex-row m-6'>
                    <div>
                        <img src={budgetb} className='w-[250px]'></img>
                    </div>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                        <p className='italic'>By finwise school</p>
                        <h1 className='font-bold text-lg mb-2'>Basics of Technical Analysis</h1>
                        <p className='text-[18px]'>This is your go-to guide for understanding and applying technical analysis in financial markets.</p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  )
}






const Main = () => {
  return (
<>
<Navigation />
     <div className=' bgadd h-auto '>
     <div class="mx-auto  flex  items-center justify-center">
      <div class="text-white mt-32 w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C]  p-[2px]">
       
       <div className='bgresrc h-[70vh]'>
        <div className='p-5 w-[100%] sm:w-[60%] h-full flex flex-col justify-center items-start'>
            <p className='text-[20px]'>Free Guide to Jump-Start Your Financial Journey</p>
            <h1 className='font-sora font-semibold text-3xl my-4'>Take Control of Your Finances in Just 2 Weeks</h1>
            <p>Get started with our free, expert-created guide designed to help you build strong financial habits and achieve your goals.</p>
            <button>Get</button>
        </div>
       </div>

    </div>   
      </div>
      </div>
      <Category />
      <Ads />
      <Newarr />
      <Guideofday />
      
      {/* final end */}
</>
  )
}

export default Main
