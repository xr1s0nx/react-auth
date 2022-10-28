import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const LoginPageNav = ({ styles }: { styles: any }) => {
   const location = useLocation();
   const loginRef: any = useRef();
   const registrationRef: any = useRef();
   const [width, changeWidth] = React.useState('0');
   const [pos, changePos] = React.useState({ marginLeft: "0" });

   React.useEffect(() => {
      changeWidth(location.search.substring(1) === "type=login" ? loginRef.current.offsetWidth : registrationRef.current.offsetWidth);
      changePos(location.search.substring(1) === "type=login" ? { marginLeft: "0" } : { marginLeft: `calc(100% - 101px)` });
   }, [location]);

   return (
      <>
         <nav className={styles.nav}>
            <Link
               to={"/sign?type=login"}
               ref={loginRef}
               className={location.search.substring(1) === "type=login" ? `${styles.navBtn} ${styles.active}` : styles.navBtn}
            >
               Login
            </Link>
            <Link
               to={"/sign?type=registration"}
               ref={registrationRef}
               className={location.search.substring(1) === "type=registration" ? `${styles.navBtn} ${styles.active}` : styles.navBtn}
            >
               Registration
            </Link>
         </nav>
         <div className={styles.line}>
            <span style={{ width, ...pos }} className={styles.activeUnderLine}></span>
         </div>
      </>
   );
};

export default LoginPageNav;
