import React from 'react'
import styles from '../../styles/styles'
import EventCard from './EventCard'
import { useSelector } from 'react-redux';

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
         <h4>{
           allEvents?.length === 0 && (
            'No Events have!'
           )
          }

         </h4>

        </div>
      </div>
    </div>
  )
}

export default Events
