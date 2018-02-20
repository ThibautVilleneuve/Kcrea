webpackJsonp([3],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder, auth, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        // building the form
        this.emailSignUpForm = formBuilder.group({
            nom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.createToast = function (message) {
        return this.toastCtrl.create({
            message: message,
            duration: 3000
        });
    };
    SignupPage.prototype.emailSignUpFormSubmit = function () {
        var _this = this;
        // first we check, if the form is valid
        if (!this.emailSignUpForm.valid) {
            this.createToast('Form not valid').present();
            return;
        }
        else {
            // if the form is valid, we continue with validation
            this.auth.signUpUser(this.emailSignUpForm.value.email, this.emailSignUpForm.value.password)
                .then(function () {
                //On ajoute les données utilisateurs
                var createThisAccount = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('Account').push();
                createThisAccount.set({
                    nom: _this.emailSignUpForm.value.nom,
                    prenom: _this.emailSignUpForm.value.prenom,
                    email: _this.emailSignUpForm.value.email,
                    key: createThisAccount.key
                });
                // showing succesfull message
                _this.createToast('Enregistrement effectué avec l\'adresse: ' + _this.emailSignUpForm.value.email).present();
                // closing dialog
                _this.viewCtrl.dismiss();
            }, 
            /**
             * Handle Authentication errors
             * Here you can customise error messages like our example.
             * https://firebase.google.com/docs/reference/js/firebase.auth.Error
             *
             * mismatch with error interface: https://github.com/angular/angularfire2/issues/976
             */
            function (error) {
                _this.createToast(error.message).present();
            });
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http//ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Inscription</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="emailSignUpForm" (ngSubmit)="emailSignUpFormSubmit()">\n\n    <ion-item>\n\n      <ion-label>Nom</ion-label>\n\n      <ion-input type="text" formControlName="nom" name="nom" required clearInput></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Prénom</ion-label>\n\n      <ion-input type="text" formControlName="prenom" name="prenom" required clearInput></ion-input>\n\n    </ion-item>\n\n\n\n     <ion-item>\n\n       <ion-label>Adresse mail</ion-label>\n\n       <ion-input type="email" formControlName="email" name="email" required clearInput></ion-input>\n\n     </ion-item>\n\n\n\n     <ion-item>\n\n       <ion-label>Mot de passe</ion-label>\n\n       <ion-input type="password" formControlName="password" clearInput></ion-input>\n\n     </ion-item>\n\n\n\n     <button ion-button item-right type="submit" [disabled]="!emailSignUpForm.valid" block>Valider</button>\n\n\n\n\n\n   </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, alertCtrl, loadingCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.googleSignUp = function () {
        this.auth.googleSignUp();
    };
    WelcomePage.prototype.forgotPass = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Enter Your Email',
            message: "A new password will be sent to your email",
            inputs: [
                {
                    name: 'recoverEmail',
                    placeholder: 'you@example.com'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        //add preloader
                        var loading = _this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            content: 'Resetting your password..'
                        });
                        loading.present();
                        //call usersservice
                        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().sendPasswordResetEmail(data.recoverEmail).then(function () {
                            //add toast
                            loading.dismiss().then(function () {
                                //show pop up
                                var alert = _this.alertCtrl.create({
                                    title: 'Check your email',
                                    subTitle: 'If this email address is associated with a valid user, you will receive a password reset email.',
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                        }, function (error) {
                            //show pop up
                            loading.dismiss().then(function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Error resetting your password',
                                    subTitle: error.message,
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro"></div>\n\n  </div>\n\n\n\n  <div padding text-center>\n\n    <button ion-button full color="primary" (click)="login()" >Connexion</button>\n\n    <button ion-button full color="dark" (click)="signup()" >Inscription</button>\n\n  </div>\n\n\n\n  <button ion-button round color="primary" clear (click)="forgotPass()" block>Mot de passe oublié ?</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, auth, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        // building the form
        this.signInForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.createToast = function (message) {
        return this.toastCtrl.create({
            message: message,
            duration: 3000
        });
    };
    LoginPage.prototype.signInFormSubmit = function () {
        var _this = this;
        // first we check, if the form is valid
        if (!this.signInForm.valid) {
            this.createToast('Ooops, form not valid...').present();
            return;
        }
        else {
            // if the form is valid, we continue with validation
            this.auth.signInUser(this.signInForm.value.email, this.signInForm.value.password)
                .then(function () {
                // showing succesfull message
                _this.createToast('Signed in with email: ' + _this.signInForm.value.email).present();
                // closing dialog
                //this.viewCtrl.dismiss();
            }, 
            /**
             * Handle Authentication errors
             * Here you can customise error messages like our example.
             * https://firebase.google.com/docs/reference/js/firebase.auth.Error
             *
             * mismatch with error interface: https://github.com/angular/angularfire2/issues/976
             */
            function (error) {
                switch (error.code) {
                    case 'auth/invalid-api-key':
                        _this.createToast('Invalid API key.').present();
                        break;
                    default:
                        _this.createToast(error.message).present();
                        break;
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Connexion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="splash-logo"></div>\n\n\n\n  <form [formGroup]="signInForm" (ngSubmit)="signInFormSubmit()">\n\n\n\n    <ion-item>\n\n      <ion-label>Email</ion-label>\n\n      <ion-input type="email" formControlName="email" name="email" required clearInput></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Mot de passe</ion-label>\n\n      <ion-input type="password" formControlName="password" clearInput></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" [disabled]="!signInForm.valid" block>Connexion</button>\n\n\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		505,
		2
	],
	"../pages/signup/signup.module": [
		503,
		1
	],
	"../pages/welcome/welcome.module": [
		504,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, afAuth, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.userData = {
            displayName: 'Stranger',
        };
        this.greeting = "Hello";
        //const userID = this.authService.getAc
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
            }
        });
        this.setGreeting();
    }
    HomePage.prototype.createToast = function (message) {
        return this.toastCtrl.create({
            message: message,
            duration: 3000
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.setGreeting = function () {
        var timeNow = new Date().getHours();
        if (timeNow < 12) {
            this.greeting = "Good morning";
        }
        else if (timeNow < 18) {
            this.greeting = "Good afternoon";
        }
        else {
            this.greeting = "Good evening";
        }
    };
    HomePage.prototype.signOutClicked = function () {
        this.afAuth.auth.signOut();
    };
    HomePage.prototype.swipeEvent = function (event) {
        if (event.deltaX < 0) {
            //
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Accueil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div padding [@myAnimation]>\n\n    <div text-center>\n\n      <p id="homePage">{{ greeting }}, {{ userData.displayName}}.</p>\n\n\n\n      <p>This is just a basic app. Why don\'t you add something?</p>\n\n    </div>\n\n\n\n    <button ion-button color="dark" block (click)="signOutClicked()">Sign Out</button>\n\n\n\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\home\home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('myAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(30%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('800ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(0)', 'opacity': 1 }))
                    ]
                    // )
                    ),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateX(0)', 'opacity': 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateX(100%)', 'opacity': 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = [{ 'name': 'add' },
            { 'name': 'add-circle' },
            { 'name': 'alarm' },
            { 'name': 'albums' },
            { 'name': 'alert' },
            { 'name': 'american-football' },
            { 'name': 'analytics' },
            { 'name': 'logo-android' },
            { 'name': 'logo-angular' },
            { 'name': 'aperture' },
            { 'name': 'logo-apple' },
            { 'name': 'apps' },
            { 'name': 'appstore' },
            { 'name': 'archive' },
            { 'name': 'arrow-back' },
            { 'name': 'arrow-down' },
            { 'name': 'arrow-dropdown' },
            { 'name': 'arrow-dropdown-circle' },
            { 'name': 'arrow-dropleft' },
            { 'name': 'arrow-dropleft-circle' },
            { 'name': 'arrow-dropright' },
            { 'name': 'arrow-dropright-circle' },
            { 'name': 'arrow-dropup' },
            { 'name': 'arrow-dropup-circle' },
            { 'name': 'arrow-forward' },
            { 'name': 'arrow-round-back' },
            { 'name': 'arrow-round-down' },
            { 'name': 'arrow-round-forward' },
            { 'name': 'arrow-round-up' },
            { 'name': 'arrow-up' },
            { 'name': 'at' },
            { 'name': 'attach' },
            { 'name': 'backspace' },
            { 'name': 'barcode' },
            { 'name': 'baseball' },
            { 'name': 'basket' },
            { 'name': 'basketball' },
            { 'name': 'battery-charging' },
            { 'name': 'battery-dead' },
            { 'name': 'battery-full' },
            { 'name': 'beaker' },
            { 'name': 'beer' },
            { 'name': 'bicycle' },
            { 'name': 'logo-bitcoin' },
            { 'name': 'bluetooth' },
            { 'name': 'boat' },
            { 'name': 'body' },
            { 'name': 'bonfire' },
            { 'name': 'book' },
            { 'name': 'bookmark' },
            { 'name': 'bookmarks' },
            { 'name': 'bowtie' },
            { 'name': 'briefcase' },
            { 'name': 'browsers' },
            { 'name': 'brush' },
            { 'name': 'logo-buffer' },
            { 'name': 'bug' },
            { 'name': 'build' },
            { 'name': 'bulb' },
            { 'name': 'bus' },
            { 'name': 'cafe' },
            { 'name': 'calculator' },
            { 'name': 'calendar' },
            { 'name': 'call' },
            { 'name': 'camera' },
            { 'name': 'car' },
            { 'name': 'card' },
            { 'name': 'cart' },
            { 'name': 'cash' },
            { 'name': 'chatboxes' },
            { 'name': 'chatbubbles' },
            { 'name': 'checkbox' },
            { 'name': 'checkbox-outline' },
            { 'name': 'checkmark' },
            { 'name': 'checkmark-circle' },
            { 'name': 'checkmark-circle-outline' },
            { 'name': 'logo-chrome' },
            { 'name': 'clipboard' },
            { 'name': 'clock' },
            { 'name': 'close' },
            { 'name': 'close-circle' },
            { 'name': 'closed-captioning' },
            { 'name': 'cloud' },
            { 'name': 'cloud-circle' },
            { 'name': 'cloud-done' },
            { 'name': 'cloud-download' },
            { 'name': 'cloud-outline' },
            { 'name': 'cloud-upload' },
            { 'name': 'cloudy' },
            { 'name': 'cloudy-night' },
            { 'name': 'code' },
            { 'name': 'code-download' },
            { 'name': 'code-working' },
            { 'name': 'logo-codepen' },
            { 'name': 'cog' },
            { 'name': 'color-fill' },
            { 'name': 'color-filter' },
            { 'name': 'color-palette' },
            { 'name': 'color-wand' },
            { 'name': 'compass' },
            { 'name': 'construct' },
            { 'name': 'contact' },
            { 'name': 'contacts' },
            { 'name': 'contract' },
            { 'name': 'contrast' },
            { 'name': 'copy' },
            { 'name': 'create' },
            { 'name': 'crop' },
            { 'name': 'logo-css3' },
            { 'name': 'cube' },
            { 'name': 'cut' },
            { 'name': 'logo-designernews' },
            { 'name': 'desktop' },
            { 'name': 'disc' },
            { 'name': 'document' },
            { 'name': 'done-all' },
            { 'name': 'download' },
            { 'name': 'logo-dribbble' },
            { 'name': 'logo-dropbox' },
            { 'name': 'easel' },
            { 'name': 'egg' },
            { 'name': 'logo-euro' },
            { 'name': 'exit' },
            { 'name': 'expand' },
            { 'name': 'eye' },
            { 'name': 'eye-off' },
            { 'name': 'logo-facebook' },
            { 'name': 'fastforward' },
            { 'name': 'female' },
            { 'name': 'filing' },
            { 'name': 'film' },
            { 'name': 'finger-print' },
            { 'name': 'flag' },
            { 'name': 'flame' },
            { 'name': 'flash' },
            { 'name': 'flask' },
            { 'name': 'flower' },
            { 'name': 'folder' },
            { 'name': 'folder-open' },
            { 'name': 'football' },
            { 'name': 'logo-foursquare' },
            { 'name': 'logo-freebsd-devil' },
            { 'name': 'funnel' },
            { 'name': 'game-controller-a' },
            { 'name': 'game-controller-b' },
            { 'name': 'git-branch' },
            { 'name': 'git-commit' },
            { 'name': 'git-compare' },
            { 'name': 'git-merge' },
            { 'name': 'git-network' },
            { 'name': 'git-pull-request' },
            { 'name': 'logo-github' },
            { 'name': 'glasses' },
            { 'name': 'globe' },
            { 'name': 'logo-google' },
            { 'name': 'logo-googleplus' },
            { 'name': 'grid' },
            { 'name': 'logo-hackernews' },
            { 'name': 'hammer' },
            { 'name': 'hand' },
            { 'name': 'happy' },
            { 'name': 'headset' },
            { 'name': 'heart' },
            { 'name': 'heart-outline' },
            { 'name': 'help' },
            { 'name': 'help-buoy' },
            { 'name': 'help-circle' },
            { 'name': 'home' },
            { 'name': 'logo-html5' },
            { 'name': 'ice-cream' },
            { 'name': 'image' },
            { 'name': 'images' },
            { 'name': 'infinite' },
            { 'name': 'information' },
            { 'name': 'information-circle' },
            { 'name': 'logo-instagram' },
            { 'name': 'ionic' },
            { 'name': 'ionitron' },
            { 'name': 'logo-javascript' },
            { 'name': 'jet' },
            { 'name': 'key' },
            { 'name': 'keypad' },
            { 'name': 'laptop' },
            { 'name': 'leaf' },
            { 'name': 'link' },
            { 'name': 'logo-linkedin' },
            { 'name': 'list' },
            { 'name': 'list-box' },
            { 'name': 'locate' },
            { 'name': 'lock' },
            { 'name': 'log-in' },
            { 'name': 'log-out' },
            { 'name': 'magnet' },
            { 'name': 'mail' },
            { 'name': 'mail-open' },
            { 'name': 'male' },
            { 'name': 'man' },
            { 'name': 'map' },
            { 'name': 'logo-markdown' },
            { 'name': 'medal' },
            { 'name': 'medical' },
            { 'name': 'medkit' },
            { 'name': 'megaphone' },
            { 'name': 'menu' },
            { 'name': 'mic' },
            { 'name': 'mic-off' },
            { 'name': 'microphone' },
            { 'name': 'moon' },
            { 'name': 'more' },
            { 'name': 'move' },
            { 'name': 'musical-note' },
            { 'name': 'musical-notes' },
            { 'name': 'navigate' },
            { 'name': 'no-smoking' },
            { 'name': 'logo-nodejs' },
            { 'name': 'notifications' },
            { 'name': 'notifications-off' },
            { 'name': 'notifications-outline' },
            { 'name': 'nuclear' },
            { 'name': 'nutrition' },
            { 'name': 'logo-octocat' },
            { 'name': 'open' },
            { 'name': 'options' },
            { 'name': 'outlet' },
            { 'name': 'paper' },
            { 'name': 'paper-plane' },
            { 'name': 'partly-sunny' },
            { 'name': 'pause' },
            { 'name': 'paw' },
            { 'name': 'people' },
            { 'name': 'person' },
            { 'name': 'person-add' },
            { 'name': 'phone-landscape' },
            { 'name': 'phone-portrait' },
            { 'name': 'photos' },
            { 'name': 'pie' },
            { 'name': 'pin' },
            { 'name': 'pint' },
            { 'name': 'logo-pinterest' },
            { 'name': 'pizza' },
            { 'name': 'plane' },
            { 'name': 'planet' },
            { 'name': 'play' },
            { 'name': 'logo-playstation' },
            { 'name': 'podium' },
            { 'name': 'power' },
            { 'name': 'pricetag' },
            { 'name': 'pricetags' },
            { 'name': 'print' },
            { 'name': 'pulse' },
            { 'name': 'logo-python' },
            { 'name': 'qr-scanner' },
            { 'name': 'quote' },
            { 'name': 'radio' },
            { 'name': 'radio-button-off' },
            { 'name': 'radio-button-on' },
            { 'name': 'rainy' },
            { 'name': 'recording' },
            { 'name': 'logo-reddit' },
            { 'name': 'redo' },
            { 'name': 'refresh' },
            { 'name': 'refresh-circle' },
            { 'name': 'remove' },
            { 'name': 'remove-circle' },
            { 'name': 'reorder' },
            { 'name': 'repeat' },
            { 'name': 'resize' },
            { 'name': 'restaurant' },
            { 'name': 'return-left' },
            { 'name': 'return-right' },
            { 'name': 'reverse-camera' },
            { 'name': 'rewind' },
            { 'name': 'ribbon' },
            { 'name': 'rose' },
            { 'name': 'logo-rss' },
            { 'name': 'sad' },
            { 'name': 'logo-sass' },
            { 'name': 'school' },
            { 'name': 'search' },
            { 'name': 'send' },
            { 'name': 'settings' },
            { 'name': 'share' },
            { 'name': 'share-alt' },
            { 'name': 'shirt' },
            { 'name': 'shuffle' },
            { 'name': 'skip-backward' },
            { 'name': 'skip-forward' },
            { 'name': 'logo-skype' },
            { 'name': 'logo-snapchat' },
            { 'name': 'snow' },
            { 'name': 'speedometer' },
            { 'name': 'square' },
            { 'name': 'square-outline' },
            { 'name': 'star' },
            { 'name': 'star-half' },
            { 'name': 'star-outline' },
            { 'name': 'stats' },
            { 'name': 'logo-steam' },
            { 'name': 'stopwatch' },
            { 'name': 'subway' },
            { 'name': 'sunny' },
            { 'name': 'swap' },
            { 'name': 'switch' },
            { 'name': 'sync' },
            { 'name': 'tablet-landscape' },
            { 'name': 'tablet-portrait' },
            { 'name': 'tennisball' },
            { 'name': 'text' },
            { 'name': 'thermometer' },
            { 'name': 'thumbs-down' },
            { 'name': 'thumbs-up' },
            { 'name': 'thunderstorm' },
            { 'name': 'time' },
            { 'name': 'timer' },
            { 'name': 'train' },
            { 'name': 'transgender' },
            { 'name': 'trash' },
            { 'name': 'trending-down' },
            { 'name': 'trending-up' },
            { 'name': 'trophy' },
            { 'name': 'logo-tumblr' },
            { 'name': 'logo-tux' },
            { 'name': 'logo-twitch' },
            { 'name': 'logo-twitter' },
            { 'name': 'umbrella' },
            { 'name': 'undo' },
            { 'name': 'unlock' },
            { 'name': 'logo-usd' },
            { 'name': 'videocam' },
            { 'name': 'logo-vimeo' },
            { 'name': 'volume-down' },
            { 'name': 'volume-mute' },
            { 'name': 'volume-off' },
            { 'name': 'volume-up' },
            { 'name': 'walk' },
            { 'name': 'warning' },
            { 'name': 'watch' },
            { 'name': 'water' },
            { 'name': 'logo-whatsapp' },
            { 'name': 'wifi' },
            { 'name': 'logo-windows' },
            { 'name': 'wine' },
            { 'name': 'woman' },
            { 'name': 'logo-wordpress' },
            { 'name': 'logo-xbox' },
            { 'name': 'logo-yahoo' },
            { 'name': 'logo-yen' },
            { 'name': 'logo-youtube' }
        ];
    }
    ListPage_1 = ListPage;
    ListPage.prototype.back = function (event) {
        if (event.deltaX > 0) {
            this.navCtrl.pop({ animation: 'ios-transition' });
        }
        else {
            this.navCtrl.pop({ animation: 'ios-transition' });
        }
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\list\list.html"*/'<ion-content>\n\n\n\n  <div (swipe)="back($event)">\n\n    <ion-item>\n\n      <button ion-button clear (click)="back($event)">\n\n        <ion-icon name="arrow-back" item-start></ion-icon>\n\n        Available Icons\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-list no-lines>\n\n      <ion-item *ngFor="let icon of icons">\n\n        <ion-icon [name]="icon.name" item-start></ion-icon>\n\n          {{icon.name}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(332);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_textarea_autoresize_textarea_autoresize__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// AngularFire + Firebase




// Pages



// User Auth Pages



// Modules
// import { IonicSwipeAllModule } from 'ionic-swipe-all';


var firebaseConfig = {
    apiKey: "AIzaSyCXIMJ_N1UbI9vGNTwuImDZXNGXKeE6Psk",
    authDomain: "kcrea-c3ca1.firebaseapp.com",
    databaseURL: "https://kcrea-c3ca1.firebaseio.com",
    projectId: "kcrea-c3ca1",
    storageBucket: "kcrea-c3ca1.appspot.com",
    messagingSenderId: "949204692965"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__directives_textarea_autoresize_textarea_autoresize__["a" /* TextareaAutoresizeDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.userData = {
            loggedIn: false,
            uid: '',
            displayName: '',
            photoURL: ''
        };
        // here we determine, if user is aunthenticated/have data in our db
        // thats we make before platform ready
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                // you can modify here the page for non. auth users
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
            }
            else {
                // page for auth. users
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                _this.userData = {
                    loggedIn: true,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL || 'assets/imgs/default-user-image.png'
                };
            }
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let status bar overlay webview
            //this.statusBar.overlaysWebView(true);
            // set status bar to white
            _this.statusBar.backgroundColorByHexString('#ffffff');
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.signOutClicked = function () {
        this.afAuth.auth.signOut();
        this.userData.loggedIn = false;
        this.userData.displayName = '';
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\app\app.html"*/'<ion-menu [content]="content" class="menu-o">\n\n  <ion-header>\n\n    <ion-toolbar color="menu-o-t">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-item no-lines *ngIf="userData.loggedIn">\n\n        <ion-avatar item-right>\n\n          <img src="{{ userData.photoURL }}">\n\n        </ion-avatar>\n\n        <h2>Welcome {{ userData.displayName }}</h2>\n\n      </ion-item>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button menuClose ion-button block color="menu-o" (click)="openPage(pages[0])">\n\n            <div>\n\n              <ion-icon name="analytics"></ion-icon>\n\n              <label>Analytics</label>\n\n            </div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button menuClose ion-button block color="menu-o" class="img-bg firebase" (click)="openPage(pages[1])">\n\n            <ion-icon name="bonfire"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button menuClose ion-button block color="menu-o" (click)="openPage(pages[1])">\n\n            <div>\n\n              <ion-icon name="images"></ion-icon>\n\n              <label>Images</label>\n\n            </div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button menuClose ion-button block color="menu-o" (click)="openPage(pages[1])">\n\n            <div>\n\n              <ion-icon name="finger-print"></ion-icon>\n\n              <label>Touch ID</label>\n\n            </div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button block color="menu-o">\n\n            <div>\n\n              <ion-icon name="flash"></ion-icon>\n\n              <label>Flash</label>\n\n            </div>\n\n\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <button ion-button block color="menu-o" class="img-bg wifi">\n\n          <ion-icon name="wifi"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n        <ion-col width-25>\n\n          <button menuClose ion-button block color="menu-o" (click)="openPage(pages[1])">\n\n            <ion-icon name="logo-xbox"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n        <ion-col width-25>\n\n          <button ion-button block color="menu-o">\n\n          <ion-icon name="ionic"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button block color="menu-o">\n\n          <ion-icon name="water"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n        <ion-col width-67>\n\n          <button ion-button block color="menu-o" class="img-bg medal">\n\n          <ion-icon name="medal"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-list>\n\n      <button menuClose ion-button block color="menu-o" (click)="signOutClicked()">\n\n        <ion-icon name="person"></ion-icon> Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Programmes\JetBrains\WebstormProjects\Kcrea\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaAutoresizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// An autoresize directive that works with ion-textarea
// Usage example: <ion-textarea autoresize></ion-textarea>
// Based on https://www.npmjs.com/package/angular2-autosize
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextareaAutoresizeDirective = (function () {
    function TextareaAutoresizeDirective(element) {
        var _this = this;
        this.element = element;
        this.onInput = function (textArea) {
            _this.adjust();
        };
        this.adjust = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
    }
    TextareaAutoresizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var waitThenAdjust = function (trial) {
            if (trial > 10) {
                // Give up.
                return;
            }
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                _this.adjust();
            }
            else {
                setTimeout(function () {
                    waitThenAdjust(trial + 1);
                }, 0);
            }
        };
        // Wait for the textarea to properly exist in the DOM, then adjust it.
        waitThenAdjust(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("input", ["$event.target"]),
        __metadata("design:type", Object)
    ], TextareaAutoresizeDirective.prototype, "onInput", void 0);
    TextareaAutoresizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "ion-textarea[autoresize]" // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TextareaAutoresizeDirective);
    return TextareaAutoresizeDirective;
}());

//# sourceMappingURL=textarea-autoresize.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    AuthProvider.prototype.signInUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.signUpUser = function (newEmail, newPassword) {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.googleSignUp = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth.GoogleAuthProvider());
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.signOutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map