import { IoMdClose } from "react-icons/io";
import { MdPersonAddAlt } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import "./Menu.scss";

const Menu = () => {

  function closeMenu() {
    const menuElement = document.querySelector(".menu");
    if (menuElement) {
      menuElement.style.display = "none";
    }
  }

  return (
    <div className="menu">
      <div className="menu_activ">
        <div className="menu_activ_top">
          <h4>Friend Activity</h4>
          <div className="menu_activ_top_icons">
            <div>
              <MdPersonAddAlt className="menu_activ_top_person" />
            </div>
            <div onClick={() => closeMenu()}>
              <IoMdClose className="menu_activ_top_clase" />
            </div>
          </div>
        </div>
        <p>
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <div className="menu_activ_center">
          <img src="Frame 37.svg" alt="lorem" />
          <img src="Frame 37.svg" alt="lorem" />
          <img src="Frame 37.svg" alt="lorem" />
        </div>
        <p>
          Go to Settings <FiChevronRight /> Social and enable “Share my
          listening activity on Spotify.’ You can turn this off at any time.
        </p>
        <button className="menu_activ_btn">SETTINGS</button>
      </div>
    </div>
  );
};

export default Menu;
