import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import "./Nav.css";

/** Component for navigating
 *
 * Props:
 * - handleLogout = function run on parent
 *
 * State:
 * - none
 * 
 * Context:
 * - userData - an object like { username, firstName, lastName, email, isAdmin}

 *
 * App -> Nav -> NavLink
 */
function Nav({ handleLogout }) { // FIXME: Why is the handleLogout the only prop here?
  console.log("* Nav");

  const userData = useContext(UserContext);

  // function handleClick(){
  //   handleLogout();
  // }

  // return (
  //   <div className="row">
  //     <nav className="Navigation bg-secondary d-flex">
  //       <span className="p-2">
  //         <NavLink exact to="/" >
  //           Friender Home
  //         </NavLink>
  //       </span>
  //       {!userData && <div>
  //         <span className="p-2">
  //           <NavLink exact to="/login" >
  //             Log In
  //           </NavLink>
  //         </span>
  //         <span className="p-2">
  //           <NavLink exact to="/signup" >
  //             Sign Up
  //           </NavLink>
  //         </span>
  //       </div>}
  //     </nav>
  //   </div>
  // );

  return (
    <nav className="Nav navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
          Friender
        </NavLink>
        {!userData && <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" exact to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" exact to="/login">
              Login
            </NavLink>
          </li>
        </ul>}
      </div>
    </nav>
  );
}

export default Nav;