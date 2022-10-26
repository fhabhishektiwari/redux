import React from 'react'
import ButtonAtom from '../../components/common/ButtonAtom';
import './styles.css';
const Home = () => {
    const handleLogout=()=>{
        console.log("Logout");
    }

  return (
    <div className='home'>
        <div className='home-content'>
            <h2>Welcome home 👽</h2>
            <ButtonAtom label='Logout' type='button' handleClick={handleLogout}/>
        </div>
    </div>
  )
}

export default Home
