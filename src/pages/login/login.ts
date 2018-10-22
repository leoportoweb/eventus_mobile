import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: any;
  senha: any;

  constructor(private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

  }

  acessar() {
    //console.log("login: " + this.login);
    //console.log("senha: " + this.senha);

    if (this.login == null || this.login.toString() == "") {
      this.presentToast("Informe o login!");
      return;
    }
    if (this.senha == null || this.senha.toString() == "") {
      this.presentToast("Informe a senha!");
      return;
    }
  }

  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'/*,
      showCloseButton: true,
      closeButtonText: 'OK'*/
    });
    toast.present();
  }

}
