import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import styles from "./LoginPage.module.scss";
import image from "../../assets/images/loginImg.png";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeLoginText, changePasswordConfirmValue, changePasswordText } from "../../redux/Slices/LoginPageSlice";

const LoginPage = () => {
   const location = useLocation();

   const [nextPage, changePage] = React.useState("");
   const dispatch = useDispatch();

   React.useLayoutEffect(() => {
      const nowPage = location.pathname.substring(1);
      changePage(nowPage.toLowerCase() !== "sign/login" ? "Sign In" : "Registration");
      document.title = nowPage.toLowerCase() === "sign/login" ? "App | Sign In" : "App | Registration"
      dispatch(changeLoginText(''));
      dispatch(changePasswordConfirmValue(''));
      dispatch(changePasswordText(''));
   }, [location]);


   return (
      <div className={styles.loginPage}>
         <motion.div
            initial={{ x: "-200px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "200px", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.description}
         >
            <h1 className={styles.title}>Sign In to Recharge Direct</h1>
            <p className={styles.text}>
               if you {nextPage.toLowerCase() !== "sign in" ? `don't an` : "have"} account you can{" "}
               <Link to={nextPage.toLowerCase() === "sign in" ? "/sign/login" : "/sign/registration"}>{nextPage} here!</Link>
            </p>
         </motion.div>
         <div className={styles.imageWrap}>
            <img src={image} alt="" />
         </div>

         <div className="page-wrap">
            <AnimatePresence mode="wait">
               <Routes>
                  <Route path={"/login"} element={<Login />} />
                  <Route path={"/registration"} element={<Registration />} />
               </Routes>
            </AnimatePresence>
         </div>
      </div>
   );
};

export default LoginPage;
