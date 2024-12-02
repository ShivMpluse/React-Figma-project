/* eslint-disable react/prop-types */


const StartGame = ({toggle}) => {
  return (
    <>
        <section className='container  mx-auto lg:flex  sm:block sm:justify-center justify-center items-center h-[95vh] flex my-auto border'>
            <img src='images/Dice.png' alt="" />
            <div className="h1 text-end flex flex-col gap-8 sm:flex">
                <h1 className="text-7xl font-bold text-end sm:text-center">Dice Game</h1>
                <div className="btn sm:flex justify-center sm:w-full lg:flex lg:justify-end md:px-4">
                <button onClick={toggle} className="bg-[#000] text-white py-3 px-3 text-xl hover:bg-gray-600 w-56 ease-in duration-500">Play Now</button>
                </div>
            </div>
        </section> 
    </>
  )
}

export default StartGame

// const Container = styled.div`
//     max-width: 1480;
//     display: flex;
//     margin: 0px auto;
// `;
// const Button = styled.button`
//     color: white;
//     padding: 10px 18px;
//     background-color: #000000;
//     max-width: 220px;
// `
