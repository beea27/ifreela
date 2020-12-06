import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import '@firebase/firestore'
import { map } from 'rxjs/operators';
import { Users } from '../interfaces/users';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;
  //private usersCollection: AngularFirestoreCollection<Users>;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
    //this.usersCollection = this.afs.collection<Users>('Users');
  }

  getDados() {
    //return this.usersCollection.doc<Users>(this.user.uid).valueChanges();
    let user = this.afAuth.auth.currentUser;
    const uid = user.uid;

    return this.afs.collection<Users>('Users', ref => ref.where('uid', '==', user.uid)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  getAll() {
    return this.afs.collection<Users>('Users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
  }

  async signUp(credentials) {
    try {
      const newUser = await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      credentials.uid = newUser.user.uid;
      const newUserObject = Object.assign({}, credentials);

      //delete newUserObject.email;
      delete newUserObject.password;

      await this.afs.collection('Users').doc(newUser.user.uid).set(newUserObject);
      return console.log('Cadastro efetuado com sucesso!');
    } catch (error) {
      return console.error(error);
    }
  }

  updateUser(user: Users) {
    this.afs.doc(`Users/${user.uid}`).update(user).then(result => {
      return result;
    })
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  getEmail() {
    return this.user && this.user.email;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  signInWithGoogle(): Promise<any> {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let token = result.credential.providerId;
            // The signed-in user info.
            let user = result.user;
            console.log(token, user);
          }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }
}