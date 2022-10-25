import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, type, value, changeValue }: { placeholder?: string; type: string, value: string, changeValue: any }) => {
   return (
      <div className={styles.inputWrap}>
         <input type={type} placeholder={placeholder} className={styles.input} value={value} onChange={((e) => changeValue(e.target.value))}/>
      </div>
   );
};

export default Input;
