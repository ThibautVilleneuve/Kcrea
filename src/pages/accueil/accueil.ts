import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { IUser } from '../../app/interface/IUser';
import { HomePage } from '../home/home';

/**
 * Generated class for the AccueilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  private user : User;
  private varTest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    let utilisateur;
    utilisateur = Object.assign(User.prototype, JSON.parse(localStorage.getItem('userData')));
    
    this.user = utilisateur;
    this.displayProperties();
    console.log(this.user);
    console.log(this.user.nom_utilisateur);
    console.log(this.user.prenom_utilisateur);
  }

  displayProperties()
  {
    for(var key in this.user) {
      var value = this.user[key];
      console.log('Key : ' + key);
      console.log('Value : ' + value);
      }
  }

  logout(){
    localStorage.removeItem('userData');
    if(localStorage.getItem('userData') == null)
    {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("Tentative de déconnexion.");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }



}
