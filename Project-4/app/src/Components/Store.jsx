/* eslint-disable react/prop-types */
import { createContext } from "react"


export const Bio = createContext();

const BioProvider = ({children}) => {
    const myName = "Shivkumar";
    const myAge = "24";
    console.log(children)

    return (
        <div>
            <Bio.Provider value={{myName, myAge}}>
            {children}
            </Bio.Provider>
        </div>
    )
}


export default BioProvider