import React from 'react';

const Main = () => {
    return (
        <div className="hero bg-[#ffffffFF] py-18">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 style={{ whiteSpace: "nowrap" }} className="text-5xl font-bold single-line">Premium Digital Tools</h1>
                    <p className="py-6 text-[#627382] font-semibold">
                     Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                   </p>
                   <div className='flex justify-center gap-5'>
                   <button className="btn rounded-3xl border border-solid border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Products</button>
                   <p className='text-[#25065D] font-semibold'>Cart (2)</p>
                   </div>
                    </div>

               </div>
        </div>
             
    );
};

export default Main;