import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const { toggleSideBar, setPageId } = useGlobalContext();

    const handleSubMenu = (ev) => {
        if (!ev.target.classList.contains("nav-link")) {
          setPageId(null);
        }
    }
    return (
      <nav onMouseOver={handleSubMenu}>
        <div className="nav-center">
          <h3 className="logo">Strapi</h3>
          <button className="toggle-btn" onClick={toggleSideBar}>
            <FaBars />
                </button>
         <NavLinks/>
        </div>
      </nav>
    );
};

export default Navbar;
