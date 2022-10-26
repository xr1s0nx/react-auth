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

   const [passType, changePassType] = React.useState("password");

   return (
      <div className={"page"}>
         <Input
            type="email"
            placeholder="Enter Email"
            value={loginText}
            changeValue={changeLoginValue}
            buttonFunc={() => dispatch(changeLoginText(""))}
         />
         <Input
            type={passType}
            placeholder="Your Password"
            value={passwordText}
            changeValue={changePasswordValue}
            buttonFunc={() => changePassType(passType === "password" ? "text" : "password")}
         />
         <ButtonSend text={"Sign In"} />
      </div>
   );
};

export default Login;
