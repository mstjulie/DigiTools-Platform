
import './App.css'
import Main from './component/Main/Main'
import Product from './component/Product/Product'
import Banner from './component/NavBer/Banner/Banner'
import NavBer from './component/NavBer/NavBer'
import Stats from './component/NavBer/Stats/Stats'
import { Suspense } from 'react'
import Cards from './component/card/Cards'
import Card from './component/card/card'
import Steps from './component/Steps/Steps'
import Stepcard from './component/Steps/Stepcard'
import Pricing from './component/Pricing'
import Footer from './component/Footer'


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
       <Card></Card>
       <Cards></Cards>
       <Steps></Steps>
       <Stepcard></Stepcard>
       <Pricing></Pricing>
       <Footer></Footer>
      
    </>
  )
}

export default App

  
  

