import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { Util } from '../../app/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cepDigitado: number;

  response: any;
  eventos: any;
  loading: any;
  teste: any;

  constructor(public navCtrl: NavController, private eventoProvider: EventoProvider, public loadindCtrl: LoadingController) {
    this.loading = loadindCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    this.loading.present();

    this.teste = Util.gerarChaveAPI("/api/evento");
  }

  ionViewDidLoad() {
    this.eventoProvider.listarEventos().then((response) => {
      this.eventos = response.json();
      console.log(this.eventos);
      //console.log(this.estudantes[0].FirstName);
    }).catch((err) => {
      console.log(err);
      });

    this.loading.dismiss();
  }

  consultarEvento(cod_evento_eve: number) {
    console.log(cod_evento_eve);
  }

  buscarEndereco() {
    this.eventoProvider.listarEndereco(this.cepDigitado).then((response) => {
      //this.response = JSON.stringify(response);
      this.response = response.json();
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }
  
  cadastrarEstudante() {

    let postData = {
      "FirstName": "Camila",
      "LastName": "Pitanga",
      "StudentID": 7,
      "Age" : 30
    }

    this.eventoProvider.cadastrarEstudante(postData).then((response) => {
      console.log(response);
      console.log(response.status);
    }).catch((err) => {
      console.log(err);
    });
  }

}
