import React from 'react';
import {Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
 
const SignOutButton = ({ firebase }) => (
 
    <Link to={ROUTES.SIGN_IN} onClick={firebase.doSignOut}> Sign Out</Link>  

);
 
export default withFirebase(SignOutButton);