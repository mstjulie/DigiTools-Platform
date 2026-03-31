import React from 'react';
import writing from '../../assets/products/writing_2327400 1.png'
const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
        <div className='flex justify-between'>
    <div className="flex-row space-y-5">
        <img src={writing} alt="" />
      <h2 className="text-3xl font-bold">AI Writing Pro</h2>
      <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
      <span className="text-2xl font-bold">$29 <span className='text-[#627382] text-xl font-normal'>/mo</span></span>
    </div>
    <div>j
    <button  style={{ whiteSpace: "nowrap" }} className=" bg-[#fed2a4] px-6 text-[#bb4d00] rounded-3xl">Best Seller</button>
    </div>
        </div>

    <ul className="mt-4 flex flex-col gap-2 text-xl text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited AI generations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>50+ writing templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Grammar checker</span>
      </li>
    </ul>
    <div className="mt-4">
      <button className="btn btn-block rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl gap-4">Buy Now</button>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Card;