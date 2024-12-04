/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
export const BASE_URL = "http://localhost:9000"



const FoodCard = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filterData, setFilterData] = useState(null)




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
    
  }, [])

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

  

  
 
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>


  


  return (
    <>
    <Header />
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

export default FoodCard;
