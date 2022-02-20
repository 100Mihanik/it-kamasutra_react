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
            <NavLink to="/Article">Article</NavLink>
          </li>
          <li className="left_section__item li_3">
            <NavLink to="/Messages">Messanes</NavLink>
          </li>
          <li className="left_section__item li_4">
            <NavLink to="/Friends">Friends</NavLink>
          </li>
          <li className="left_section__item li_5">
            <NavLink to="/Subscriptions">Subscriptions</NavLink>
          </li>
          <li className="left_section__item li_6">
            <NavLink to="/Photos">Photos</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Letbar;
