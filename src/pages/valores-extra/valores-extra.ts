import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { ExtraProvider } from '../../providers/extra/extra';
import { Util } from '../../app/util';

@Component({
  selector: 'page-valores-extra',
  templateUrl: 'valores-extra.html',
})
export class ValoresExtraPage {

  loading: any;
  evento: any;
  extras: any;
  cod_evento_eve: any;
  des_evento_eve: any;
  datas: string[];

  constructor(private eventoProvider: EventoProvider, private extraProvider: ExtraProvider, public loadindCtrl: LoadingController) {
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
      console.log(this.evento);

      this.des_evento_eve = this.evento.des_evento_eve;

      this.datas = [];

      var dataAtual = Util.getDateFormatted();

      //console.log(this.evento.dat_inscricao1_eve);
      //console.log(Util.formatDate(this.evento.dat_inscricao1_eve, 'pt-br'));
      //console.log(this.evento.dat_inscricao2_eve);
      //console.log(Util.formatDate(this.evento.dat_inscricao2_eve, 'pt-br'));
      //console.log(this.evento.dat_inscricao3_eve);
      //console.log(Util.formatDate(this.evento.dat_inscricao3_eve, 'pt-br'));
      //console.log(Util.getDateFormatted());

      if (this.evento.dat_inscricao1_eve != null && this.evento.dat_inscricao1_eve > dataAtual) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao1_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao2_eve != null && this.evento.dat_inscricao2_eve > dataAtual) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao2_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao3_eve != null && this.evento.dat_inscricao3_eve > dataAtual) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao3_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao4_eve != null && this.evento.dat_inscricao4_eve > dataAtual) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao4_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao5_eve != null && this.evento.dat_inscricao5_eve > dataAtual) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao5_eve, 'pt-br'));
      }

    }).catch((err) => {
      console.log(err);
      });

    this.extraProvider.listarPorEvento(this.cod_evento_eve).then((response) => {
      this.extras = response.json();
      console.log(this.extras);
    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

}
