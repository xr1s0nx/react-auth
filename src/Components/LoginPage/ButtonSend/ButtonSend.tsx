import React from 'react';
import styles from './ButtonSend.module.scss'

const ButtonSend = ({text}: {text: string}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default ButtonSend
