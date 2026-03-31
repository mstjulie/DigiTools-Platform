import React from 'react';
import img from '../../../assets/banner.png'
import Play from '../../../assets/Play.png'
const Banner = () => {
    return (
        
        <div className="hero bg-base-200 min-h-screen">
           <div className="hero-content flex-col lg:flex-row-reverse gap-15">
                    <img src={img} alt="" />
           <div>
                <h6 className="py-5">New: AI-Powered Tools Available</h6>
                <h1 className="text-6xl font-bold">Supercharge Your
                  <br/>  Digital Workflow </h1>
                <p className="py-6">
                  Access premium AI tools, design assets, templates, and productivity<br/> 
                  software—all in one place. Start creating faster today.<br/> 
                  Explore Products
                </p>
          
            <div className='flex  gap-4'>
                <button className="btn rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white gap-4">Explore Products</button>
               <button className="btn rounded-3xl border border-solid border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> <img src={Play} alt="" />Watch Demo</button>
            </div>
               </div>
            </div>
       </div>
    );
};

export default Banner;
        
