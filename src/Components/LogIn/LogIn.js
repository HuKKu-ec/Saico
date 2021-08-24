
import React from 'react' 
import './LogIn.css'
import firebase from "firebase/app"
import "firebase/auth"
import { useHistory } from 'react-router-dom'
function LogIn() {
    const history=useHistory()
    const googleAuth=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    // const credential = result.credential;
    // const user = result.user;
    
  }).then(()=>{history.push('/')}).catch((error) => {
    console.log(error);
  });
    }
    return (
        <div style={{'textAlign': 'center'}}>
        <button onClick={googleAuth} className="LoginBut"><p className="font-but">Login With Google Account</p></button>
        </div>
    )
}
export default LogIn
