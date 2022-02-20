import { NavLink } from "react-router-dom";
import s from "./Rightbar.module.css"

function Rightbar() {
	return (
		<aside className={s.right_bar}> 
         <nav>
            <ul className={s.right_bar__group_1}>
               <li className={s.right_bar__element}>
                  <NavLink to="/article1" className = {navData => navData.isActive ? s.active : s.item}>My article</NavLink>
               </li>
               <li className={s.right_bar__element}>
                  <NavLink to="/article/random" className = {navData => navData.isActive ? s.active : s.item}>Random</NavLink>
               </li>
               <li className={s.right_bar__element}>
                  <NavLink to="/article/favorites" className = {navData => navData.isActive ? s.active : s.item}>Favorites</NavLink>
               </li>
            </ul>
         </nav>
      </aside>
	)
}

export default Rightbar;