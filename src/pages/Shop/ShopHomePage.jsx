import React from 'react'
import ShopInfo from '../../components/Shop/ShopInfo'
import styles from './../../styles/styles';
import ShopProfileData from '../../components/Shop/ShopProfileData';

const ShopHomePage = () => {
  return (
    <div className="w-11/12 mx-auto">

      <div className='w-full flex py-10 justify-between'>
          <div className='w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-sreen sticky top-2 left-0 z-10'>
              <ShopInfo isOwner={true}/>


          </div>
          <div className='w-[72%] rounded-[4px]'>
              <ShopProfileData isOwner={true}/>


          </div>

      </div>
      
    </div>
  )
}

export default ShopHomePage
