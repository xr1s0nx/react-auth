import React from "react";
import "./App.scss";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { motion, AnimatePresence } from "framer-motion";

function App() {
   const [theme, changeTheme] = React.useState(localStorage.getItem("app-theme") || "dark");
   const navigate = useNavigate();
   const loginStatus = useSelector((state: RootState) => state.LoginPageSlice.loginStatus);
   const location = useLocation();
   const [boxVisible, changeVisible] = React.useState(true);

   React.useLayoutEffect(() => {
      localStorage.setItem("app-theme", theme);
   }, [theme]);

   React.useEffect(() => {
      const path = location.search.substring(1);
      
      navigate(loginStatus ? "/" : `/sign?${path}` || "/sign?type=login");
   }, []);

   return (
      <div className={"App"} data-theme={theme}>
         <div className="container">
            <Routes location={location}>
               <Route path={"/sign/*"} element={<LoginPage />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
