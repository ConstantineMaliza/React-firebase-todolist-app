import React from 'react';
 
const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} authUser={props.authUser} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
 
export default FirebaseContext;