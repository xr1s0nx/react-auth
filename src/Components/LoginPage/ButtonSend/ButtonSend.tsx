import React from 'react';
import styles from './ButtonSend.module.scss'

type CallbackFunction = () => void;

const ButtonSend = ({text, onClickFunc}: {text: string, onClickFunc: CallbackFunction}) => {
  return (
    <button onClick={() => onClickFunc()} className={styles.button}>{text}</button>
  )
}

export default ButtonSend
