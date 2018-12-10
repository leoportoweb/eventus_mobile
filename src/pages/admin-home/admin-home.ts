import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { UserHomePage } from '../user-home/user-home';
import { LoginPage } from '../../pages/login/login';
import { InscricaoTotalPage } from '../../pages/inscricao-total/inscricao-total';
import { CategoriaTotalPage } from '../../pages/categoria-total/categoria-total';
import { CursoTotalPage } from '../../pages/curso-total/curso-total';
import { ExtraTotalPage } from '../../pages/extra-total/extra-total';

@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

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
  }

  irPara(opt: number) {
    console.log(opt);
    if (opt === 1)
      this.navCtrl.push(InscricaoTotalPage);
    else if (opt === 2)
      this.navCtrl.push(CategoriaTotalPage);
    else if (opt === 3)
      this.navCtrl.push(CursoTotalPage);
    else if (opt === 4)
      this.navCtrl.push(ExtraTotalPage);
    else if (opt === 5) {
      this.cod_evento_eve = localStorage.setItem("controle_acesso", "0");
      this.navCtrl.setRoot(LoginPage);
    }
    else if (opt === 6) {
      this.cod_evento_eve = localStorage.setItem("controle_acesso", "0");
      this.navCtrl.setRoot(UserHomePage);
    }
  }

  validarAcesso() {
    if (localStorage.getItem("controle_acesso") === "0") {
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
