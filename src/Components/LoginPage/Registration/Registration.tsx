import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { changeLoginText, changePasswordText, changePasswordConfirmValue } from "../../../redux/Slices/LoginPageSlice";
import Input from "../Input/Input";
import ButtonSend from "../ButtonSend/ButtonSend";

const Registration = () => {
   const dispatch = useDispatch();
   const loginText = useSelector((state: RootState) => state.LoginPageSlice.loginText);
   const passwordText = useSelector((state: RootState) => state.LoginPageSlice.loginPassword);
   const passwordConfirmText = useSelector((state: RootState) => state.LoginPageSlice.passwordConfirm);

   const changeValue = (loginText: string) => {
      dispatch(changeLoginText(loginText));
   };

   const changePasswordValue = (passwordText: string) => {
      dispatch(changePasswordText(passwordText));
   };

   const changeConfirmValue = (passwordText: string) => {
      dispatch(changePasswordConfirmValue(passwordText));
   };

   return (
      <div className={"page"}>
         <Input type="email" placeholder="Enter Email" value={loginText} changeValue={changeValue} />
         <Input type="password" placeholder="Your Password" value={passwordText} changeValue={changePasswordValue} />
         <Input type="password" placeholder="Confirm Password" value={passwordConfirmText} changeValue={changeConfirmValue} />
         <ButtonSend text="Registration" />
      </div>
   );
};

export default Registration;
