import { NavLink } from "react-router-dom";
import "./Leftbar.css";

function Letbar() {
  return (
    <aside className="left_section">
      <nav>
        <ul className="left_section__items">
          <li className="left_section__item li_1">
            <NavLink to="/My_page">My page</NavLink>
          </li>
          <li className="left_section__item li_2">
            <NavLink to="/article">Article</NavLink>
          </li>
          <li className="left_section__item li_3">
            <NavLink to="/messages">Messanes</NavLink>
          </li>
          <li className="left_section__item li_4">
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li className="left_section__item li_5">
            <NavLink to="/subscriptions">Subscriptions</NavLink>
          </li>
          <li className="left_section__item li_6">
            <NavLink to="/photos">Photos</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Letbar;
