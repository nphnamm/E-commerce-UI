import React from 'react'
import styles from '../../styles/styles'
import EventCard from './EventCard'
import { useSelector } from 'react-redux';
import noData from '../../Assests/images/noData.png'
const Events = () => {
  const {allEvents} = useSelector((state) => state.events);  

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className='font-extrabold'> Popular Events</h1>
        </div>
        <div className='w-full grid'>
        {
          allEvents?.length !== 0 && (
            <EventCard active={true} data={allEvents && allEvents[0]} />
          )
         }
         <div className='flex m-auto p-[24px]'>{
           allEvents?.length === 0 && (
            <img src={noData}/>
           )
          }

         </div>

        </div>
      </div>
    </div>
  )
}

export default Events
