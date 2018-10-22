import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { Util } from '../../app/util';

@Component({
  selector: 'page-valores',
  templateUrl: 'valores.html',
})
export class ValoresPage {

  loading: any;
  evento: any;
  categorias: any;
  cod_evento_eve: any;
  datas: string[];

  constructor(private eventoProvider: EventoProvider, private categoriaProvider: CategoriaProvider, public loadindCtrl: LoadingController) {
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

      this.datas = [];

      var dataAtual = new Date();

      if (this.evento.dat_inscricao1_eve != null && this.evento.dat_inscricao1_eve > dataAtual) {
        //console.log(this.evento.dat_inscricao1_eve);
        //console.log(Util.formatDate(this.evento.dat_inscricao1_eve, 'pt-br'));
        this.datas.push(Util.formatDate(this.evento.dat_inscricao1_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao2_eve != null) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao2_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao3_eve != null) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao3_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao4_eve != null) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao4_eve, 'pt-br'));
      }
      if (this.evento.dat_inscricao5_eve != null) {
        this.datas.push(Util.formatDate(this.evento.dat_inscricao5_eve, 'pt-br'));
      }

    }).catch((err) => {
      console.log(err);
      });

    this.categoriaProvider.listarPorEvento(this.cod_evento_eve).then((response) => {
      this.categorias = response.json();
      console.log(this.categorias);
    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

}
