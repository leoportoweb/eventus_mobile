import { Injectable } from '@angular/core';
import { Util } from '../../app/util';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoProvider {

  constructor(public http: Http) {

  }

  listarEventos() {
    let url = localStorage.getItem("urlAPI") + "/api/evento/get";
    let key = Util.gerarChaveAPI("/api/evento/get");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  consultarEvento(cod_evento_eve: string) {
    let url = localStorage.getItem("urlAPI") + "/api/evento/get/" + cod_evento_eve;
    let key = Util.gerarChaveAPI("/api/evento/get");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  acessoAdmin(postData: any) {
    let url = localStorage.getItem("urlAPI") + "/api/Evento/AcessoAdmin";
    let key = Util.gerarChaveAPI("/api/Evento/AcessoAdmin");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Accept", 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.post(url, postData, { headers: headers }).toPromise();
  }

  listarEndereco(cep: number) {
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Bearer ' + localStorage.getItem('alertaBrasil'));

    return this.http.get(url, { headers: headers }).toPromise();
  }

  /*
  cadastrarEstudante(postData: any) {
    let url = localStorage.getItem("urlAPI") + "/api/students/post";
    let key = Util.gerarChaveAPI("/api/students/post");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Accept", 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.post(url, postData, { headers: headers }).toPromise();
  }
  */

}
