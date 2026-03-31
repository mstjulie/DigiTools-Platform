import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mx-auto h-40'>
        <div className=' flex justify-center gap-25 py-15'>
            <div>
                <h1 className='text-white text-5xl font-bold'>50K+</h1>
                <p className='text-white font-bold'>Active Users</p>
            </div>
            <div>
                <h1 className='text-white text-5xl font-bold'>200+</h1>
                <p className='text-white font-bold'>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-white text-5xl font-bold'>4.9</h1>
                <p className='text-white font-bold'>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Stats;