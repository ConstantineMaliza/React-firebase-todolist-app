import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAmKJ3GM_4eeagtD6tFE6NAkPY-imA6J_0",
  authDomain: "todolist-ed003.firebaseapp.com",
  databaseURL: "https://todolist-ed003.firebaseio.com",
  projectId: "todolist-ed003",
  storageBucket: "todolist-ed003.appspot.com",
  messagingSenderId: "957026729409",
  appId: "1:957026729409:web:1818ba9c565f9442f70340"
    
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.firestore();
    }

// *** Auth API ***
 
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
 
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

     // *** User API ***
 
    user = uid => this.db.collection('users').doc(uid);
  
    users = () => this.db.collection('users');

     // *** User API ***
     
    todos = () => this.db.collection('Todolistapp');
    
    todo= () =>this.db.collection('Todolistapp');

    delete = id => this.db.collection('Todolistapp').doc(id).delete();
    }

   
   
  export default Firebase;