import { Injectable } from '@angular/core';
//--Router
import { Router } from '@angular/router';
//--firebase
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
//fitt RXSJ
import { Observable, of } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';
//Model
import { DisplayUser } from '../models/displayUser.model';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user: Observable<DisplayUser>;

  constructor(private _afAuth: AngularFireAuth, private _DB: AngularFirestore, private _router: Router) {

    this.user = this._afAuth.authState.pipe(switchMap(user => {
      if(user) {
        return this._DB.doc<DisplayUser>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }))
  }


  //Set up if you want more login options
  googleLogin() {
    //Creating a googleLogin
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  logout() {
    this._afAuth.auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  private oAuthLogin(provider) {
    //Retriving data from that user
    return this._afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.updateUserData(result.user);

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  private updateUserData(user) {
    //set user data to firestore on login

    const userRef: AngularFirestoreDocument<DisplayUser> = this._DB.doc(`users/${user.uid}`);
    const data: DisplayUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      read: false,
      date: user.date = new Date().toDateString()
    }
    return userRef.set(data);
  }

}
