import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsCircle} from 'react-icons/bs';
import {PiCircleHalfFill} from 'react-icons/pi';
import {MdOutlineCancel} from 'react-icons/md';
import {TbCircleDotted} from 'react-icons/tb';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import { TbAlertSquareFilled } from "react-icons/tb"
import { MdSignalCellular1Bar, MdSignalCellular3Bar, MdSignalCellular4Bar } from "react-icons/md"

import './ColumnHeader.css'
import Heading1 from './Typography/Heading1';
import Heading2 from './Typography/Heading2';
import UserProfile from './shared/UserProfile';

const icon = {
  "Backlog":<TbCircleDotted size={"12px"} color='#BDC1C7' />,
  "Done": <BsCheckCircleFill size={"12px"} color='#5E6AD2' />,
  "In progress":<PiCircleHalfFill size={"12px"} color='#F0C846' />,
  "Cancelled":<MdOutlineCancel size={"12px"} color='#92A0B1' />,
  "Todo":<BsCircle size={"12px"} color='#E1E1E1' />,
  "Urgent":<TbAlertSquareFilled size={"12px"} color='#FC7840' />,
  "High":<MdSignalCellular4Bar size={"12px"} color='#6B6F76' />,
  "Medium":<MdSignalCellular3Bar size={"12px"} color='#6B6F76' />,
  "Low":<MdSignalCellular1Bar size={"12px"} color='#6B6F76' />,
  "No Priority":<HiOutlineDotsHorizontal size={"12px"} color='#787C83' />
}

const ColumnHeader = ({title,num,userStatus,type}) => {
  return (
    <div className='Column-Header-Container'>
        <div className='Column-Header-Left'>
          {icon[title]}
            {type==="Users" ? <UserProfile name={title} userStatus={userStatus} /> :null}
            <Heading1>{title}</Heading1>
            <Heading2 classes={"Column-Card-Number"} >{num}</Heading2>
        </div>
        <div className='Column-Header-Right' >
            <AiOutlinePlus color='#61666D' />
            <BiDotsHorizontalRounded color='#61666D' />
        </div>
    </div>
  )
}

export default ColumnHeader