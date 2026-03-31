
import './App.css'
import Main from './component/Main/Main'
import Product from './component/Product/Product'
import Banner from './component/NavBer/Banner/Banner'
import NavBer from './component/NavBer/NavBer'
import Stats from './component/NavBer/Stats/Stats'
import { Suspense } from 'react'

 const fetchCards = async() =>{
   const res = await fetch("/data.json")
   return res.json();
 }


function App() {
   const ProductPromise = fetchCards();

  return (
    <>
       <NavBer></NavBer>
       <Banner></Banner>
       <Stats></Stats>
       <Main></Main>
       <Suspense fallback = {<span className="loading loading-spinner text-primary"></span>}>
       <Product ProductPromise={ProductPromise}></Product> 
       </Suspense>
      
    </>
  )
}

export default App

  
  

