import React, { FC } from "react";
import fitness from "assets/fitness.svg";
import meditation from "assets/meditation.svg";
import pool from "assets/pool.svg";
import bicycle from "assets/bicycle.svg";

/**
 * A side navigation bar
 */
const AsideBar: FC = () => {
  return (
    <aside className="asideBar">
      <ul className="asideBar_ul">
        <li className="asideBar_ul_li">
          <img className="logoAsideBar" src={meditation} alt="logo meditation" />
        </li>
        <li className="asideBar_ul_li">
          <img className="logoAsideBar" src={pool} alt="logo pool" />
        </li>
        <li className="asideBar_ul_li">
          <img className="logoAsideBar" src={bicycle} alt="logo bicycle" />
        </li>
        <li className="asideBar_ul_li">
          <img className="logoAsideBar" src={fitness} alt="logo fitness" />
        </li>
      </ul>
      <div className="asideBar_copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
};

export default AsideBar;
