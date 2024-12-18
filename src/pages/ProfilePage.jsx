import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/styles'
import ProfileSideBar from "../components/Profile/ProfileSidebar.jsx";
import ProfileContent from "../components/Profile/ProfileContent.jsx";
const ProfilePage = () => {
    const [active,setActive] = useState(1);



  return (
    <div>
      <Header/>
      <div className={`flex px-36 py-10`}>
        <div className='w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%] shadow-xl rounded-[10px]'>
            <ProfileSideBar active={active} setActive={setActive}/>


        </div> 
         <ProfileContent active={active} />
      </div>
    </div>
  )
}

export default ProfilePage
