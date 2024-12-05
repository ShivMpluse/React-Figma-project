/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { BASE_URL } from './FoodCard';
import Button from './Button';

// import { BASE_URL } from "./FoodCard"

const Card = ({ data  }) => {
  return (
    <>
      <div className=" container card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 ">
        {
          data?.map(({name, image, text, price, type}) => (
            <DataCard key={name} className='border max-h-[150px] rounded-xl flex py-4 px-2 backdrop-blur-[8px] bg-white/5 gap-4'>
              <div className="img w-28 h-28">
                <img src={BASE_URL + image} alt="logo" className='w-full h-full object-cover'/>
              </div>
              <div className="food-info">
                <div className="info max-w-[300px]">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm">{text}</p>
                </div>
                <div className="btn flex justify-between mt-2">
                  <Button text={"$"+price.toFixed(2)} className='' />
                  <Button text={type} className='' />
                </div>
              </div>
            </DataCard> 
          ))
        }
      </div>
    </>
  )
}

export default Card

const DataCard = styled.div``;