import React, { useState } from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";

import './Header.css'
import Heading1 from '../Typography/Heading1';
import HeaderDropDown from './HeaderDropDown';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = (e)=>{
    setVisible(prev => !prev);
  }

  const onSelect=()=>{
    setVisible(false);
  }

  return (
    <>
      <div className="Header-Container">
          <div className="Header-Button" onClick={handleOnClick} >
              <HiOutlineAdjustmentsHorizontal />
              <Heading1>Display</Heading1>
              <BiChevronDown />
          </div>
      </div>
      {visible && <HeaderDropDown onSelect={onSelect} />}
    </>
  )
}

export default Header