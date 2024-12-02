
const GameRules = () => {
  return (
    <>
      <div className="rule p-4 bg-red-100 md:max-w-[600px] mx-auto gap-10 flex flex-col shadow-2xl shadow-gray-600 mb">
        <h2 className="text-2xl font-semibold">
            How To Play Dice Game
        </h2>
        <ul className="text-xs font-thin list-disc p-4">
            <li>Select Any Number</li>
            <li>Click On Dice Image</li>
            <li>Ofter click on dice if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then two point will be dedcuted</li>
        </ul>
      </div>
    </>
  )
}

export default GameRules
