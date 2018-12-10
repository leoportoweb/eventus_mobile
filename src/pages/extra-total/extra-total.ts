import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { InscricaoOnLineProvider } from '../../providers/inscricao-on-line/inscricao-on-line';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-extra-total',
  templateUrl: 'extra-total.html',
})
export class ExtraTotalPage {

  loading: any;
  evento: any;
  extras: any;
  cod_evento_eve: any;
  des_evento_eve: any;

  constructor(public navCtrl: NavController,
    private eventoProvider: EventoProvider,
    private inscricaoOnLineProvider: InscricaoOnLineProvider,
    public loadindCtrl: LoadingController) {

    this.loading = loadindCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    this.loading.present();

    this.cod_evento_eve = localStorage.getItem("cod_evento_eve");

    this.validarAcesso();
  }

  ionViewDidLoad() {
    this.eventoProvider.consultarEvento(this.cod_evento_eve).then((response) => {
      this.evento = response.json();
      //console.log(this.evento);
      this.des_evento_eve = this.evento.des_evento_eve;
    }).catch((err) => {
      console.log(err);
    });

    this.inscricaoOnLineProvider.listarInscricaoExtraTotalPorEvento(this.cod_evento_eve).then((response) => {
      this.extras = response.json();
      //console.log(this.extras);
    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

  validarAcesso() {
    if (localStorage.getItem("controle_acesso") === "0") {
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
