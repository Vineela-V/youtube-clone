import React from 'react'
import './Navbar.CSS'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import Search_icon from '../../assets/Search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=> setSidebar((prev) => !prev===false?true:false)} src={menu_icon} alt="Menu" />
            <img className='logo_icon' src={logo} alt="Logo" />
        </div>

        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
            <input type="text" placeholder='Search' />
            <img src={Search_icon} alt="" />  
            </div>
        </div>

        <div className="nav-right flex-div">
           <img src={upload_icon} alt="" />
           <img src={more_icon} alt="" />
           <img src={notification_icon} alt="" />
           <img src={profile_icon} className='user-icon' alt="" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
