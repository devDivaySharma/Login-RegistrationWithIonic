import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  doLogin(event) {
    //console.log(event);
    this.login(this.loginForm.value);
  }

  constructor(public fb: FormBuilder,public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams,public storage: Storage) {
  }
  login(user) {
    console.log(user);
   var self=this;
    //self.storage.set('user',JSON.stringify(res.data));
        self.storage.get('user').then((val) => {
          let suser=JSON.parse(val)
            console.log('val.email', suser.email,"user.email",user.email,"suser.password",suser.password,"user.password",user.password);
            if(suser.email==user.email && suser.password==user.password){
            self.showToast("Login Successfull.")
            self.storage.set("userLogin",true)
            self.navCtrl.setRoot(HomePage);
            }
          else{
            self.showToast("Email and Password does not matched.")
          }
        })
      self.showToast("No user Exist Please Signup first.")
  }
  showHide() {
       this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
       this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
 showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  pushPage() {
      this.navCtrl.setRoot(SignupPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
