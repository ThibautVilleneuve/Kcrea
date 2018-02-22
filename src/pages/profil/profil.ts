import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {Profil} from '../../models/profil';
import {AngularFireDatabase} from "angularfire2/database";
import 'rxjs/add/operator/take';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  public userDetailsForm : FormGroup;
  profil = {} as Profil;
  userId: string;
  nom: string;
  prenom: string;
  
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
      public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,) {
            // building the form
      this.userDetailsForm = formBuilder.group({
        nom: ['', Validators.compose([Validators.required])],
        prenom: ['', Validators.compose([Validators.required])]
      });
  }

  createProfil(){
    this.afAuth.authState.subscribe(user =>{
      //this.afDatabase.list(`/profil/${user.uid}`).push();
      let setUserInfos = firebase.database().ref(`/profil/${user.uid}`);
      setUserInfos.set
          ({
            nom: this.userDetailsForm.value.nom,
            prenom: this.userDetailsForm.value.prenom
          })
    })
    console.log("Nom: " + this.userDetailsForm.value.nom);
    console.log("Prénom: " + this.userDetailsForm.value.prenom);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
