import React from 'react';

const Pricing = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-full mx-auto w-full py-30 mt-20'>
        <div className='hero hero-content '>
            <div className='container items-center mx-auto space-y-4'>
                <h1 className='text-5xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex flex-2 gap-4'>
                    <button className="btn rounded-4xl">Explore Products</button>
                    <button className="border border-solid border-white text-white px-7 rounded-4xl bg-none">View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
        </div>
    );
};

export default Pricing;