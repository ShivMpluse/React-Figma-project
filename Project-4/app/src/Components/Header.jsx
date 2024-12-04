// import { useState } from "react"
import Button from "./Button"


  

const Header = () => {



  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    // if(searchValue === ""){
    //   setFilterData(null)
    // }

    // const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    //  setFilterData(filter)

  }
  return (
    <>
      <section className="bg bg-[#323436] py-8 flex flex-col gap-8">
        <div className="header sm:flex-d-col md:flex  sm:justify-center md:justify-between md:px-6 sm:px-2 container mx-auto">
          <img src='/images/logo.svg' alt="logo" className="" />
          <input type="text" onChange={searchFood} className=" border rounded-lg border-red-400 py-1 px-2 bg-transparent placeholder:text-white text-white" placeholder="Search Food..."/>
        </div>
        <div className="category flex gap-3 justify-center">
            <Button text='All'/>
            <Button text='Lunch'/>
            <Button text='Dinner'/>
            <Button text='Break Fast'/>
        </div>
      </section>
      
    </>
  )
}

export default Header
