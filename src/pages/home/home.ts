import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { trigger, transition, style, animate, state } from '@angular/animations';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(30%)', opacity: 0}),
          animate('800ms', style({transform: 'translateY(0)', 'opacity': 1}))]
        // )
        ),
        transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}))]
        )
      ]
    )
  ]
})
export class HomePage {

    private _userNom = {}

    get userNom(): {} {
        return this._userNom;
    }

    set userNom(value: {}) {
        this._userNom = value;
    }

  userData = {
    displayName: 'Stranger'
  };
    userDatas ={
    };
  userPrenom = {

  };

  userID = {

  };

  greeting = "Hello";

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,
    public toastCtrl: ToastController) {

    afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userID = firebase.auth().currentUser.uid;
        this.userDatas = firebase.database().ref('Account/'+ this.userID)
            .once('value')
            .then(function(snapshot){
                //this.userNom = (snapshot.val() && snapshot.val().prenom);
            })
      }
    });

    this.setGreeting();
  }

  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    })
  }

  doRefresh(refresher) {



    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  setGreeting() {
    let timeNow = new Date().getHours();

    if (timeNow < 12) {
      this.greeting = "Good morning";
    } else if (timeNow < 18) {
      this.greeting = "Good afternoon";
    } else {
      this.greeting = "Good evening";
    }
  }


  signOutClicked() {
    this.afAuth.auth.signOut();
  }


  swipeEvent(event: any) {
    if (event.deltaX < 0){
      //
    }

  }


}
