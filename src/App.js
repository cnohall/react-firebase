import React, {Component} from 'react';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "",
  authDomain: ""
})

class App extends Component {
  state = {isSignedIn : false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions : [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucces : () => false
    }
  }

componentDidMount = () => {


  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSignedIn:!!user})
  })
}

  render () {
    return (
    <div className="App">
      {this.state.isSignedIn ? (
        <div>Signed In!</div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
  </div>
    );
  }
}

export default App;
