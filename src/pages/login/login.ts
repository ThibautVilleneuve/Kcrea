import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { User } from '../../app/user';
import { empty } from 'rxjs/Observer';

import { IUser } from '../../app/interface/IUser';
import { AccueilPage } from '../accueil/accueil';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  private login : FormGroup;
  private result;
  private jsonResult;
  data:any = {};
  dataTest:JSON;
  private user : User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder, public http:Http, private toastCtrl: ToastController) {
    this.login = this.formBuilder.group({
      email : ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmitLoginForm(){
    var link = 'http://79.94.83.246/apitest/login.php';
        var myData = JSON.stringify({login: this.login.value});
        
        this.http.post(link, myData)
        .subscribe(data => {
          this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
          //this.jsonResult = JSON.parse(this.data['response']);
          if (this.jsonResult != false)
          {
            //console.log(this.data.response);
            //var user = new User;
            //let utilisateur = Object.create(User.prototype);
            let utilisateur =  Object.assign(User.prototype, JSON.parse(this.data['response']));
            this.user = utilisateur;
            //var json = JSON.parse(this.data['response']);
            //console.log(JSON.parse(this.data['response']));
            //console.log('Bienvenue ' + utilisateur. + ' ' + utilisateur.getNom());
            if(localStorage.getItem('userData') == null)
            {
              localStorage.setItem('userData', JSON.stringify(utilisateur));
            }
            //console.log(localStorage.getItem('userData'));
            //console.log(this.user.prenom_utilisateur)
            this.navCtrl.setRoot(AccueilPage);
          }
          else
          {
            console.log('Nom de compte ou mot de passe eronné');
          }
        }, error => {
            console.log("Oooops!");
        });

    //console.log(this.user.value);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log();
  }

}
