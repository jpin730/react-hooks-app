import { NavLink } from "react-router-dom";

export const NavBar = ({ routes }) => {
  return (
    <ul className="nav nav-tabs">
      {routes.map((route) => (
        <li className="nav-item" key={route.path}>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
