import React from 'react';
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Cards = () => {
    return (
        
        <div className='grid grid-cols-3 gap-4 container mx-auto'>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
     <img className='size-20 bg-[#e2e3e4] bg-size-[auto_100px] rounded-full' src={user} alt="" /> 
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card <br/> required to get started.</p>
  </div>
          </div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
     <img className='size-20 bg-[#e2e3e4] bg-size-[auto_100px] rounded-full' src={pack} alt="" /> 
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p>Browse our catalog and select the tool that fit your needs.</p>
  </div>
          </div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
     <img className='size-20 bg-[#e2e3e4] bg-size-[auto_100px] rounded-full' src={rocket} alt=""/> 
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p>Download and start using your premium tools immediately.</p>
  </div>
          </div>
         </div> 
        
    );
};

export default Cards;