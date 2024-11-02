import { Outlet, NavLink } from "react-router-dom";
import { Navitems } from "../routes/NavItems";

const Header = () => {
  return (
    <>
      <nav>
        <img src="../logo.png" alt="logo" width='40px' />
        <ul>
            {Navitems.map((item)=>
              <li  key={item.id}>
                 <NavLink activeClass='active' to={item.path}>{item.title}</NavLink>
             </li>    
            )}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;
