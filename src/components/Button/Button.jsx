import React from 'react'
import styles from '../Button/Button.module.css'
import { TbMessageChatbotFilled } from "react-icons/tb";


const Button = (props) => {
  const {isOutline , icon , text} = props;
  return (
    <button className={isOutline ? styles.outline_btn:styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
