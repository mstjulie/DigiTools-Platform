import React from 'react';

// import img from '../../assets/products/writing_2327400 1.png'

const AvailableProduct = ({Products}) => {
    console.log(Products, "Products");
    return (
        <>
       <div className='grid grid-cols-3 gap-4 container mx-auto'>
       {
        Products.map(Product => {
           console.log(Product, 'Product');
           return (
   <div className="card bg-base-100 shadow-2xl ">
  <div className="card-body">
        <div className='flex justify-between'>
    <div className="flex-row space-y-5">
       {/* <img src={Product.img} alt="" />  */}
       
      
      <h2 className="text-3xl font-bold">{Product.title}</h2>
      <p className='text-[#627382]'>{Product.description}</p>
      <span className="text-2xl font-bold">${Product.price} <span className='text-[#627382] text-xl font-normal'>/mo</span></span>
    </div>
    <div>
    <button  style={{ whiteSpace: "nowrap" }} className=" bg-[#fed2a4] px-6 text-[#bb4d00] rounded-3xl">{Product.badge}</button>
    </div>
        </div>

    <ul className="mt-4 flex flex-col gap-2  text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Product.features}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Product.features}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Product.features}</span>
      </li>
    </ul>
    <div className="mt-4 container mx-auto">
      <button className="btn btn-block rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl gap-4">{Product.buttonText}</button>
    </div>
  </div>
            </div>

           )
        })
       }
       </div>

   </>
    );
};


    

export default AvailableProduct;