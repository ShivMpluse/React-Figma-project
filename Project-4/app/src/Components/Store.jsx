/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const Bio = createContext();

const BioProvider = ({ children }) => {
  const [data, setData] = useState([]); // To store API data
  const [filteredData, setFilteredData] = useState([]); // To store filtered data

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/data"); // Update the endpoint to match your API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json(); // Parse JSON data
        setData(apiData); // Save API data in `data`
        setFilteredData(apiData); // Default filtered data is all items
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Bio.Provider value={{ data, filteredData, setFilteredData }}>
      {children}
    </Bio.Provider>
  );
};

export default BioProvider;
