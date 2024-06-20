import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "../../assets/logo.svg";
import MobileNav from './MobileNav';

const Header = () => {
    const [hideleft, setHideleft] = useState("-left-[1000px]");
    const menuItems = ["recipes", "resources", "about", "contact"];

    const onOpen = () => {
        setHideleft("left-0");

    }
    const onClose = () => {
        setHideleft("-left-[1000px]");
        
    }
    return (
        <>
            <div className='max-[900px]:hidden'><DesktopNav menuItems={ menuItems} Logo={logo} /></div>
            <div className='min-[900px]:hidden'><MobileNav menuItems={ menuItems} Logo={logo} onClose={onClose} hideleft={hideleft} onOpen={onOpen} /></div>
        </>
    
  )
}

export default Header