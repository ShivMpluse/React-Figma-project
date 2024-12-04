import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { BASE_URL } from "./Components/FoodCard";

const App = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filterData, setFilterData] = useState(null)

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if(searchValue === ""){
      setFilterData(null)
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
     setFilterData(filter)

  }
  useEffect(() => {
    
    const fetchFoodData = async () => {

      setLoading(true)

        try {

          const response = await fetch(BASE_URL)
        
          const json = await response.json()

          setData(json)
          setFilterData(json)

          setLoading(false)

        } catch (error) {
          setError("Unable to fetch data")
        }
      
    }

    fetchFoodData();

    // const searchFood = (e) => {
    //   const searchValue = e.target.value;
    //   console.log(searchValue);
  
    //   if(searchValue === "") {
    //     setFilterData(null)
    //   } else {
    //     const filteredData = data?.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    //     setFilterData(filteredData)
    //   }
    // }
    
  }, [])

  
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>



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
      <section className="">
      <div className="BG w-full h-[auto] flex justify-center">
        <img 
          src="images/bg.png" 
          alt="bg" 
          className="w-full h-auto object-cover sm:h-[76vh] md:h-[80vh] lg:h-[82vh] relative" 
        />
        <div className="absolute text-white p-4 mt-2">
          <Card data={ filterData }/>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default App;
