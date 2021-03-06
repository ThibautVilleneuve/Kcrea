import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';
import { AccueilPage } from '../accueil/accueil';


@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage {
    data:any = {};
    loader:any = {};
    constructor(public navCtrl: NavController, public http: Http, public loadingCtrl : LoadingController) {
        this.data.username = '';
        this.data.response = '';
        this.http = http;
        //this.loader = this.loadingCtrl.create({content: "Veuillez patienter..."});
        //this.loader.present();
     }

        
	 submit() {
        var link = 'http://79.94.83.246/apitest/api.php';
        var myData = JSON.stringify({username: this.data.username});
        //test
        
        this.http.post(link, myData)
        .subscribe(data => {
            this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response   console.log(data);
        }, error => {
            console.log("Oooops!");
        });
  }

    login(){
        this.navCtrl.push(LoginPage);
    }

    registration(){
        this.navCtrl.push(RegistrationPage);
    }

    ionViewDidLoad() {
        
        if(localStorage.getItem('userData') != null)
        {
            this.navCtrl.setRoot(AccueilPage);
        }
      }
}

window.onload = () => {
    //HomePage.loader
    console.log("Page chargée.")
}
