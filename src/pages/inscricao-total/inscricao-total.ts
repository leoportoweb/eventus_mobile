import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { InscricaoOnLineProvider } from '../../providers/inscricao-on-line/inscricao-on-line';
import { CategoriaTotalPage } from '../../pages/categoria-total/categoria-total';

@Component({
  selector: 'page-inscricao-total',
  templateUrl: 'inscricao-total.html',
})
export class InscricaoTotalPage {

  loading: any;
  evento: any;
  cod_evento_eve: any;
  des_evento_eve: any;
  categorias: any;
  total_qtd_inscritos: any;
  total_val_total: any;

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
  }

  ionViewDidLoad() {
    this.eventoProvider.consultarEvento(this.cod_evento_eve).then((response) => {
      this.evento = response.json();
      //console.log(this.evento);
      this.des_evento_eve = this.evento.des_evento_eve;
    }).catch((err) => {
      console.log(err);
    });

    this.inscricaoOnLineProvider.listarInscricaoOnLineTotalCategoriaPorEvento(this.cod_evento_eve).then((response) => {
      this.categorias = response.json();
      //console.log(this.categorias);

      this.total_qtd_inscritos = 0;
      this.total_val_total = 0; 

      for (let categoria of this.categorias) {
        //console.log(categoria);
        //console.log("inscritos: " + categoria.qtd_inscritos); 
        this.total_qtd_inscritos += categoria.qtd_inscritos;
        this.total_val_total += categoria.val_total;
      }

      //console.log(this.total_qtd_inscritos);
      //console.log(this.total_val_total); 

    }).catch((err) => {
      console.log(err);
    });

    this.loading.dismiss();
  }

  totalPorCategoria() {
    this.navCtrl.setRoot(CategoriaTotalPage);
  }

}
