import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { ValoresPage } from '../valores/valores';
import { ValoresCursoPage } from '../valores-curso/valores-curso';
import { ValoresExtraPage } from '../valores-extra/valores-extra';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  loading: any;
  evento: any;
  cod_evento_eve: any;
  des_evento_eve: any;

  constructor(public navCtrl: NavController,
    private eventoProvider: EventoProvider,
    public loadindCtrl: LoadingController) {

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
    }).catch((err) => {
      console.log(err);
    });
  }

  irPara(opt: number) {
    console.log(opt);
    if (opt === 1)
      this.navCtrl.push(ValoresPage);
    //else if (opt === 2)
    //  this.navCtrl.push(CategoriaTotalPage);
    else if (opt === 3)
      this.navCtrl.push(ValoresCursoPage);
    else if (opt === 4)
      this.navCtrl.push(ValoresExtraPage);
    //else if (opt === 5)
    //  this.navCtrl.push(LoginPage);
    else if (opt === 6)
      this.navCtrl.push(LoginPage);
    else if (opt === 7) {
      console.log("cod_evento_eve: " + localStorage.getItem("cod_evento_eve"));
      localStorage.setItem("cod_evento_eve", null);
      console.log("cod_evento_eve: " + localStorage.getItem("cod_evento_eve"));
      this.navCtrl.setRoot(HomePage);
    }
  }

}
