import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { changeLoginText, changePasswordText, changePasswordConfirmValue, registrationBtnClick } from "../../../redux/Slices/LoginPageSlice";
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

   const [passVisible, changePassVisible] = React.useState("password");
   const [confirmVisible, changeConfirmVisible] = React.useState("password");
   const regBtnClick = async () => {
      await dispatch(registrationBtnClick())
   }

   const loginError = useSelector((state: RootState) => state.LoginPageSlice.emailError);
   const passwordError = useSelector((state: RootState) => state.LoginPageSlice.passwordError);
   const confirmPasswordError = useSelector((state: RootState) => state.LoginPageSlice.confirmPasswordError);

   return (
      <div className={"page"}>
         <Input errorStatus={loginError} type="email" placeholder="Enter Email" value={loginText} changeValue={changeValue} buttonFunc={() => dispatch(changeLoginText(""))} />
         <Input
            type={passVisible}
            placeholder="Your Password"
            value={passwordText}
            changeValue={changePasswordValue}
            buttonFunc={() => changePassVisible(passVisible === "password" ? "text" : "password")}
            errorStatus={passwordError}
         />
         <Input
            type={confirmVisible}
            placeholder="Confirm Password"
            value={passwordConfirmText}
            changeValue={changeConfirmValue}
            buttonFunc={() => changeConfirmVisible(confirmVisible === "password" ? "text" : "password")}
            errorStatus={confirmPasswordError}
         />
         <ButtonSend text="Registration" onClickFunc={regBtnClick}/>
      </div>
   );
};

export default Registration;
