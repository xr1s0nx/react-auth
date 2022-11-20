import React from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import styles from "./LoginPage.module.scss";
import image from "../../assets/images/loginImg.png";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeLoginText, changePasswordConfirmValue, changePasswordText } from "../../redux/Slices/LoginPageSlice";
import MainImg from "./MainImg";
import LoginPageNav from "./LoginPageNav";
const LoginPage = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const [nextPage, changePage] = React.useState("");
   const dispatch = useDispatch();

   React.useEffect(() => {
      navigate("/sign?type=login");

      console.log(performance.navigation.type);
   }, []);

   React.useLayoutEffect(() => {
      const nowPage = location.search.substring(1);
      changePage(nowPage.toLowerCase() !== "type=login" ? "Sign In" : "Registration");
      document.title = nowPage.toLowerCase() === "type=login" ? "App | Sign In" : "App | Registration";
      dispatch(changeLoginText(""));
      dispatch(changePasswordConfirmValue(""));
      dispatch(changePasswordText(""));
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
               <Link to={nextPage.toLowerCase() === "sign in" ? "/sign?type=login" : "/sign?type=registration"}>{nextPage} here!</Link>
            </p>
         </motion.div>
         <div className={styles.imageWrap}>
            <MainImg image={image} />
         </div>

         <div className="page-wrap">
            <LoginPageNav styles={styles} />
            <AnimatePresence mode="wait">
               {location.search.substring(1) === "type=login" ? (
                  <motion.div
                     key={"login"}
                     initial={{ x: "-50%", opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: "-50%", opacity: 0, transition: { duration: 0.3 } }}
                  >
                     <Login />
                  </motion.div>
               ) : (
                  <motion.div
                     key={"registrtion"}
                     initial={{ x: "50%", opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: "50%", opacity: 0, transition: { duration: 0.3 } }}
                     transition={{ delay: 0 }}
                  >
                     <Registration />
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default LoginPage;
