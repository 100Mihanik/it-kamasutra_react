import s from"./Header.module.css";

import logo from "./logo.png";

function Header() {
	return (
		<header>
      <div className="container">
         <div className={s.header_inner}>
            <a className={s.header_inner__link} href="index.html" title="Home page"> 
               <img className={s.header_inner__logo} src={logo} width="80" height="60" alt="KITTY"/>
               <h1 className={s.header_inner__title}>Kitty</h1> 
            </a> 
            <form  className={s.header_inner__search} action="#" method="POST">
               <input className={s.header_inner__input} type="text" name="search" placeholder="Search"/>
            </form>
         </div>
      </div>
   </header>
	);
}

export default Header;
