import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { CursoProvider } from '../../providers/curso/curso';
import { Util } from '../../app/util';

@Component({
  selector: 'page-valores-curso',
  templateUrl: 'valores-curso.html',
})
export class ValoresCursoPage {

  loading: any;
  evento: any;
  cursos: any;
  cod_evento_eve: any;
  des_evento_eve: any;
  datas: string[];

  constructor(private eventoProvider: EventoProvider, private cursoProvider: CursoProvider, public loadindCtrl: LoadingController) {
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

    this.cursoProvider.listarPorEvento(this.cod_evento_eve).then((response) => {
      this.cursos = response.json();
      console.log(this.cursos);
    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

}
