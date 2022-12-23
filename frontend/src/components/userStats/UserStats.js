import React from 'react'
import { InfoBox } from '../infoBox/InfoBox'
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import "./UserStats.scss"

//Icons
const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

export const UserStats = () => {
  return (
    <div className='user-summary '>
        <h3 className='--mt --flex-center'>User Stats</h3>
        <div className='info-summary --flex-center'>

            <InfoBox icon={icon1} title={"Total Users"} count={"5"} bgColor="card1"/>

            <InfoBox icon={icon2} title={"Verify Users"} count={"2"} bgColor="card2"/>

            <InfoBox icon={icon3} title={"Unverified Users"} count={"3"} bgColor="card3"/>

            <InfoBox icon={icon4} title={"Suspended Users"} count={"1"} bgColor="card4"/>


        </div>
    </div>
  )
}
