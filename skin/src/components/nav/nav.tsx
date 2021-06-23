import { useState } from "react";

type MenuItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type NavPropType = {
  menu: MenuItem[];
  onSelectionChange?: (item: MenuItem) => void;
};

function Nav(props: NavPropType): JSX.Element {
  const { menu, onSelectionChange: onMenuSelected } = props;
  const [activeItemIdx, setActiveItemIdx] = useState(0);

  const onMenuItemClick = (idx: number) => {
    setActiveItemIdx(idx);
    onMenuSelected?.(menu[idx]);
  };

  return (
    <nav className="nav">
      {menu.map((menuItem, idx) => {
        return (
          <li
            className={idx === activeItemIdx ? "menu-item active" : "menu-item"}
            key={menuItem.title}
            onClick={() => onMenuItemClick(idx)}
          >
            {menuItem.icon} <span className="title">{menuItem.title}</span>
          </li>
        );
      })}
    </nav>
  );
}

export default Nav;
