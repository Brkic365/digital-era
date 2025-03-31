import React from 'react'
import styles from "../styles/components/GradientIcon.module.scss"

import { PiStrategy } from "react-icons/pi";
import { HiPencil } from "react-icons/hi";
import { IoIosRadio } from "react-icons/io";
import { LuHandshake, LuSpeech } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode, FaDollarSign } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";

const icons = {
  "strategy" : <PiStrategy />,
  "pen" : <HiPencil />,
  "radio" : <IoIosRadio />,
  "handshake" : <LuHandshake />,
  "design" : <MdOutlineDesignServices />,
  "code" : <FaCode />,
  "money" : <FaDollarSign />,
  "talk" : <LuSpeech />,
  "tools" : <VscTools />,
  "rocket" : <IoRocketOutline />,
  "integrity" : <HiOutlineCubeTransparent />,
  "check" : <BsPatchCheck />,
}

function GradientIcon({ icon, size = "2rem" }) {
  return (
    <div className={styles.gradientIcon} style={{width: size, height: size}}>
      {icons[icon]}
    </div>
  )
}

export default GradientIcon