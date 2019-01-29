import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user:any;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams,public storage: Storage) {
   var self=this;
    storage.get('user').then((val) => {
        self.user=JSON.parse(val)
    })
  }
  showToast(message) {
     let toast = this.toastCtrl.create({
       message: message,
       duration: 3000,
       position: 'bottom'
     });
     toast.present();
   }
  logout(){
    if(this.storage.set("userLogin",false))
    this.navCtrl.setRoot(LoginPage);
    this.showToast("Logout Successfull.");
  }

}
