import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { changeLoginText, changePasswordText, changePasswordConfirmValue, registrationBtnClick } from "../../../redux/Slices/LoginPageSlice";
import Input from "../Input/Input";
import ButtonSend from "../ButtonSend/ButtonSend";
import axios from 'axios';

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
   const regRequest = useSelector((state: RootState) => state.LoginPageSlice.registrationRequest);
   const email = useSelector((state: RootState) => state.LoginPageSlice.loginText);
   const password = useSelector((state: RootState) => state.LoginPageSlice.loginPassword);


   React.useEffect(() => {
      if(regRequest) {
         axios.post('http://localhost:5000/api/registration', {
            email,
            password
         }).then(response => {
            if (response.data.success) {
               dispatch(changeLoginText(''));
               dispatch(changePasswordText(''));
               dispatch(changePasswordConfirmValue(''));
            } else {
               alert('Error !')
            }
         })
      }
   }, [regRequest])

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
