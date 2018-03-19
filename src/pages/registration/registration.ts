import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  private user: FormGroup;
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public http: Http, private toastCtrl: ToastController) {
    this.user = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email : ['', Validators.required],
      pass: ['', Validators.required],
      passconf: ['', Validators.required],
    });
  }

  onSubmitRegistrationForm(){
    var link = 'http://79.94.83.246/apitest/newacc.php';
        var myData = JSON.stringify({user: this.user.value});
        
        this.http.post(link, myData)
        .subscribe(data => {
        	//this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
          const toast = this.toastCtrl.create({message: 'Félicitation ' + this.user.controls['prenom'].value + " " +  this.user.controls['nom'].value + " votre compte a bien été créé.", duration: 3000, position: 'bottom'});
          toast.present();
        }, error => {
            console.log("Oooops!");
        });

    //console.log(this.user.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
