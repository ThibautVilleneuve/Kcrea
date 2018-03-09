import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { IUser } from '../../app/interface/IUser';

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

    let utilisateur: User = Object.assign(new User(), JSON.parse(localStorage.getItem('userData')));
    console.log(utilisateur);
    console.log(utilisateur.getPrenom())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
