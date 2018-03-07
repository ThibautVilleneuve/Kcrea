import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';

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

    var tempUser = JSON.parse(localStorage.getItem('userData'));
    
    Object.assign(this.varTest, tempUser);
    console.log(tempUser);
    console.log(this.user);
    console.log(this.varTest);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
