import React from "react";
import Input from "../Input/Input";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { changeLoginText, changePasswordText } from "../../../redux/Slices/LoginPageSlice";
import ButtonSend from "../ButtonSend/ButtonSend";

const Login = () => {
   const dispatch = useDispatch();
   const loginText = useSelector((state: RootState) => state.LoginPageSlice.loginText);
   const passwordText = useSelector((state: RootState) => state.LoginPageSlice.loginPassword);

   const changeLoginValue = (loginText: string) => {
      dispatch(changeLoginText(loginText));
   };
   const changePasswordValue = (passwordText: string) => {
      dispatch(changePasswordText(passwordText));
   };

   return (
      <motion.div
         initial={{ x: "200px", opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{
            x: "-200px",
            opacity: 0,
            transitionEnd: {
               display: "none",
            },
         }}
         transition={{ duration: 0.5 }}
         className={"page"}
      >
         <Input type="email" placeholder="Enter Email" value={loginText} changeValue={changeLoginValue} />
         <Input type="password" placeholder="Your Password" value={passwordText} changeValue={changePasswordValue} />
         <ButtonSend text={"Sign In"} />
      </motion.div>
   );
};

export default Login;
