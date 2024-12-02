import { useState } from "react";
import GameRules from "./GameRules";


const GamePlay = () => {
    const numArray = [1, 2, 3, 4, 5, 6];

    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0)
    const [error, setError] = useState(" ")
    const [rule, setRule] = useState(false)

    

    const getRandomArbitrary = (min, max) => {
        console.log(Math.floor(Math.random() * max))
        return Math.floor(Math.random() * (max - min)) + min;

    }

    
    const roleDice = () => {
        if(selectedNum === null){
            alert("You have not selected any number")
            setError("You have not selected any number")
            return;
        }
        setError("")

        const randNumber = getRandomArbitrary(1, 7);
            setCurrentDice ((prev) => prev + randNumber)

        if (selectedNum === randNumber){
            setScore((val) => val + randNumber)
        } else {
            setScore((val) => val - randNumber)
        }

        setSelectedNum(undefined)
    }


    // const rule = () => {
    //     setRule(<GameRules />)
    // }
    


    const reset = () => {
        setSelectedNum(null)
        setCurrentDice(1)
        setError("")
        setScore(0)
    }

    


  return (
    <>
        <div className="main-1 flex flex-col gap-10  max-h-[40vh]">
            <div className="main flex justify-between border px-2 py-4">
                <div className="score">
                    <h1 className="text-6xl font-bold">
                        {score}
                    </h1>
                    <p className="text-xl font-semibold">
                        Total Score
                    </p>
                </div>
                <div className="paar flex flex-col gap-7">
                        <div className="error text-red-400">{error}</div>
                    <div className="selector md:flex gap-4 sm:grid sm:grid-cols-6 flex-wrap">
                        {
                            numArray.map((value, i) =>{
                                return(
                                    <div
                                        key={i}
                                        className={`col box mx-auto font-semibold flex justify-center items-center p-3 border border-black cursor-pointer duration-500 ease-in-out ${
                                            value === selectedNum ? 'bg-black text-white' : ''
                                        }`}
                                        onClick={() => setSelectedNum(value)}
                                    >
                                        {value}
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <p className="font-semibold text-end">Select Number</p>
                </div>
            </div>
            <div className="container mx-auto flex justify-center ">
                <div className="main flex flex-col gap-6 my-auto">
                    <div className="content cursor-pointer" onClick={roleDice}>
                        <img src={`./images/image-${currentDice}.png`} alt="Dice" />
                    </div>
                    <div className="content flex flex-col gap-6 justify-center">
                        <h1 className="text-2xl mx-auto">Click on Dice to roll</h1>
                        <button className="bg-[#fff] text-black border-2 border-black py-2 px-4" onClick={reset}>Reset Score</button>
                        <button className="bg-[#000]  text-white py-2 px-4" onClick={() => setRule((prev) => !prev)}>{rule ? "Hide Rules" : "Show Rules"}</button>
                    </div>
                </div>
            </div>
                 <div className="rules delay-300 ease-in-out duration-700">
                    {rule && <GameRules />}
                 </div>
                    
        </div>
        
    </>
  )
}

export default GamePlay
