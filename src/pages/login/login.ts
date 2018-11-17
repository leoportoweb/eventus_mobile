import { Component } from '@angular/core';
import { EventoProvider } from '../../providers/evento/evento';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { InscricaoTotalPage } from '../../pages/inscricao-total/inscricao-total';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: any;

  err: any;
  evento: any;
  cod_evento_eve: any;
  des_evento_eve: any;
  nom_img_card: any;
  des_senha_inscricao_eve: any;

  constructor(public navCtrl: NavController,
    private eventoProvider: EventoProvider,
    public loadindCtrl: LoadingController,
    private toastCtrl: ToastController) {

    this.loading = loadindCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    this.loading.present();

    this.cod_evento_eve = localStorage.getItem("cod_evento_eve");
  }

  ionViewDidLoad() {
    this.eventoProvider.consultarEvento(this.cod_evento_eve).then((response) => {
      this.evento = response.json();
      //console.log(this.evento);

      this.des_evento_eve = this.evento.des_evento_eve;
      this.nom_img_card = this.evento.nom_img_card;
    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

  acessar() {
    //console.log("senha: " + this.des_senha_inscricao_eve);

    if (this.des_senha_inscricao_eve == null || this.des_senha_inscricao_eve.toString() == "") {
      this.presentToast("Informe a senha!");
      return;
    }

    let postData = {
      "cod_evento_eve": this.cod_evento_eve,
      "des_senha_inscricao_eve": this.des_senha_inscricao_eve
    }

    this.eventoProvider.acessoAdmin(postData).then((response) => {
      //console.log(response);
      //console.log("status " + response.status);
      this.navCtrl.setRoot(InscricaoTotalPage);
    }).catch((err) => {
      //console.log(err);
      //console.log("status " + err.status);
      if (err.status === 400) {
        this.err = err.json();
        //console.log(this.err);
        this.presentToast(this.err.MENSAGEM);
      }
    });
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
