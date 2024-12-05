/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { BASE_URL } from "./Components/FoodCard"; // Importing the base URL for API requests
import { Audio } from 'react-loader-spinner'

const App = () => {
  // State to store fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  // Function to handle search input and filter data
  const searchFood = (e) => {
    const searchValue = e.target.value; // Get input value
    // console.log(searchValue);

    if (searchValue === " ") {
      setFilterData(null); // Reset filtered data if input is empty
      return;
    }

    // Filter data based on the search value
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true); // Set loading state

      try {
        // Fetch data from the API
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json); // Store fetched data
        setFilterData(json); // Initialize filtered data
        setLoading(false); // Reset loading state
      } catch (error) {
        setError(<Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          className='mx-auto my-auto'
          wrapperStyle
          wrapperClass
        />); // Handle errors
      }
    };

    fetchFoodData();
  }, []);

  // Function to filter data by category
  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data); // Reset to all data
      setSelectedBtn("all"); // Set selected button to "all"
      return;
    }

    // Filter data based on the selected category
    const filter = data?.filter(
      (food) => food.type.toLowerCase() === type.toLowerCase()
    );
    setFilterData(filter);
    setSelectedBtn(type); // Set selected button to the current category
  };

  // console.log("Filtered Data:", filterData); // Debug filtered data




  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;
  




  return (
    <>
      {/* Header Section */}
      <section className="bg bg-[#323436] py-8 flex flex-col gap-8 fixed top-0 left-0 z-50 w-full">
        {/* Header Content */}
        <div className="header sm:flex-d-col md:flex  sm:justify-center md:justify-between md:px-6 sm:px-2 container mx-auto">
          <img src="/images/logo.svg" alt="logo" className="" />
          {/* Search Input */}
          <input
            type="text"
            onChange={searchFood}
            className="border rounded-lg border-red-400 py-1 px-2 bg-transparent placeholder:text-white text-white"
            placeholder="Search Food..."
          />
        </div>
        {/* Category Buttons */}
        <div className="category flex gap-3 justify-center">
          <Button onClick={() => filterFood("all")} text="All" />
          <Button onClick={() => filterFood("lunch")} text="Lunch" />
          <Button onClick={() => filterFood("dinner")} text="Dinner" />
          <Button onClick={() => filterFood("breakfast")} text="Breakfast" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="">
        <div className="BG w-full h-[auto] flex justify-center">
          {/* Background Image */}
          <img
            src="images/bg.png"
            alt="bg"
            className="w-full h-auto object-cover sm:h-[76vh] md:h-[80vh] lg:h-[82vh] relative"
          />
          {/* Food Cards */}
          <div className="absolute text-white p-4 mt-2">
            <Card data={filterData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
