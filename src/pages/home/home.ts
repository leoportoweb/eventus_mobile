import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cepDigitado: number;
  response: any;

  estudantes: any;

  constructor(public navCtrl: NavController, private eventoProvider: EventoProvider) {

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

  buscarEstudantes() {

    this.eventoProvider.listarEstudantes().then((response) => {
      //this.response = JSON.stringify(response);
      this.estudantes = response.json();
      console.log(this.estudantes);
      console.log(this.estudantes[0].FirstName);
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
