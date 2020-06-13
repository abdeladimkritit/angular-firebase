import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private afAuth : AngularFireAuth) { }

  login(email : string , password : string){
    return new Promise((resolve , reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
                  .then((userData) => resolve(userData) , (error)=>reject(error))
    })
  }

  register(email : string , password : string){
    return new Promise((resolve , reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
                  .then((userData) => resolve(userData) , (error)=>reject(error))
    })
  }

  loginWithGmail(){
    return new Promise((resolve , reject)=>{
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                  .then((userData) => resolve(userData) , (error)=>reject(error))
    })
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
