import React, { useEffect, useState } from "react";
import NetflixLogo from "./assets/Netflix-simbolo.png";
import NetflixAvatar from "./assets/avatar.png";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLogo} alt="Netflix Logo" />
      <img className="nav_avatar" src={NetflixAvatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
