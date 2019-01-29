import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  //public storage:Storage ;
  bgColor: string = "#673ab7";
  public registerForm = this.fb.group({
    email: ["", Validators.required],
    name: ["", Validators.required],
    mobile: ["", Validators.required],
    password: ["", Validators.required]  
  });
  doRegister(event) {
    //console.log(event);
    this.register(this.registerForm.value);
  }

  constructor(public fb: FormBuilder,public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams,public storage: Storage) {
  }
  register(user) {
    var self=this;
      self.storage.set('user',JSON.stringify(user)).then(
        () => {
          self.showToast("Login Successfull.")
            self.navCtrl.setRoot(LoginPage);
            },
        error => console.error('Error storing item', error)
      );
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
      this.navCtrl.setRoot(LoginPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
