import React from 'react';
// import { Link } from 'react-router-dom';
 
import SignOutButton from '../SignOut';
// import * as ROUTES from '../../constants/routes';
import '../Style/nav.css';
 
const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
 
const NavigationAuth = () => (
  <nav>
  <ul>
    <li className="logo">
      <h1>ToDo List App</h1>
    </li>
    {/* <li>
      <Link to={ROUTES.TODO}>Todo</Link>
    </li> */}
    <li>
      <SignOutButton />
    </li>
  </ul>
  </nav>
);
 
const NavigationNonAuth = () => (
  <nav>
  <ul>
    <li className="logo">
      <h1>ToDo List App</h1>
    </li>
    {/* <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li> */}
  </ul>
  </nav>
);
 
export default Navigation;