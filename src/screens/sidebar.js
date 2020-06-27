import React, { useState } from "react";
import App from "../App";
import logo from "../ui/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEdit,
  faLightbulb,
  faShieldAlt,
  faBatteryQuarter,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", Icon: "icon-home" },
    { label: "Fale Conosco", slug: "discover", Icon: "icon-home" },
  ]);
  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++)
    navigation.push(
      <li key={"nav" + i + "-" + nav[i].slug}>
        <NavLink to={nav[i].slug} className={"aic link bl noul flex c333"}>
          <div className={"ico 24" + nav[i].Icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </NavLink>
      </li>
    );
  return (
    <nav>
      <div className="sidebar rel">
        {/**NAV */}
        <a href="#" className="logo bl">
          <img src={logo} className="bl"></img>
        </a>
        <ul className="nav">{navigation}</ul>

        {/* TEMA DARK */}
        {/* updates curses */}
        <div className="updated-course flex aic">
          <FontAwesomeIcon className="ico cfff s24" icon={faLightbulb} />
          <div className="lbl s15 fontB c333">
            Updated Courses
            <h2 className="author s13 c777">by Matheus Gabriel</h2>
          </div>
        </div>

        {/* PONTOS */}
        <div className="stats aic jic flex">
          <div className="stats-box flex">
            <FontAwesomeIcon
              className="ico s24 ico-points"
              icon={faShieldAlt}
            />
            <h2 className="val s15 c333 fontB">1800</h2>
            <h2 className="lbl s13 c777">points</h2>
          </div>

          <div className="stats-box flex">
            <FontAwesomeIcon
              className="ico s24 ico-battery"
              icon={faBatteryQuarter}
            />
            <h2 className="val s15 c333 fontB">43.35</h2>
            <h2 className="lbl s13 c777">complete</h2>
          </div>
        </div>

        {/* USUARIO */}
        <div className="me flex aic">
          <div className="photo cfff s24">
            <img src="https://placeimg.com/100/100/people" className="bl" />
          </div>
          <div className="lbl s15 fontB c333">
            Usuario
            <h2 className="uname s13 c777">@nomeUsuario</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
