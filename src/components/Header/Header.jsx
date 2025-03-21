import React, { useContext ,useState} from "react";
import styles from "./header.module.css";
import startsyLogo from "../../data/StartsyLogo.png";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../utils/auth-hook";
import firebase from "firebase";
const Header = () => {
  const isAuth = useContext(authContext);
    const auth = firebase.auth();
    const authData = useContext(authContext);

  const [loggedOut,setLoggedOut]=useState(false);
   
    const signouttt = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setLoggedOut(true);
          authData.authTriggered();
          console.log("logging out");
        });
    };
  let navigate = useNavigate();
  return (
    <div>
      <div className={`${styles.headerWrapper}`}>
        <div className={`${styles.imageWrapper}`}>
          <img
            className={`${styles.cover}`}
            src={startsyLogo}
            alt="startsy Logo"
          />
        </div>
        <div className={`${styles.headerContentWrapper}`}>
          <ul className={`${styles.headerContent}`}>
            <Link to="/">
              <li>Home</li>
            </Link>
          
            <Link to="/objectives">
              <li>Objective</li>
            </Link>
            <Link to="/investors">
              <li>Investors</li>
            </Link>
            <Link to="/startup">
              <li>Start Ups</li>
            </Link>
            <Link to="/home">
              <li>Startup Location Finder</li>
            </Link>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
