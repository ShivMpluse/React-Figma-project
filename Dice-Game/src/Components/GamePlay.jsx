import { useState } from "react";


const GamePlay = () => {
    const numArray = [1, 2, 3, 4, 5, 6];

    const [selectedNum, setSelectedNum] = useState();
    console.log(selectedNum)

    const [setCurrentDice, setSetCurrentDice] = useState()

    const getRandomArbitrary = (min, max) => {
        return Math.random();
      }
      

  return (
    <>
        <div className="main-1 flex flex-col gap-28">
            <div className="main flex justify-between border px-2 py-4">
                <div className="score">
                    <h1 className="text-6xl font-bold">
                        0
                    </h1>
                    <p className="text-xl font-semibold">
                        Total Score
                    </p>
                </div>
                <div className="paar flex flex-col gap-7">
                    <div className="selector sm:gap-4 md:flex gap-4">
                        {
                            numArray.map((value, i) =>{
                                return(
                                    <div
                                        key={i}
                                        className={`box mx-auto font-semibold flex justify-center items-center w-12 h-12 border border-black cursor-pointer duration-500 ease-in-out ${
                                            value === selectedNum ? 'bg-red-300 ' : ''
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
            <div className="container mx-auto flex justify-center h-full ">
                <div className="main flex flex-col gap-6 my-auto">
                    <div className="content" onClick={() => getRandomArbitrary(1, 7)}>
                        <img src="./images/image-1.png" alt="" />
                    </div>
                    <div className="content flex flex-col gap-6 justify-center">
                        <h1 className="text-2xl mx-auto">Dice Game</h1>
                        <button className="bg-[#fff] text-black border-2 border-black py-2 px-4">Reset Score</button>
                        <button className="bg-[#000] text-white py-2 px-4">Show Rules</button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default GamePlay
