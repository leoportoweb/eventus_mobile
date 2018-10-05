import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Util } from '../../app/util';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoProvider {

  constructor(public http: Http) {

  }

  listarEndereco(cep: number) {
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Bearer ' + localStorage.getItem('alertaBrasil'));

    return this.http.get(url, { headers: headers }).toPromise();
  }

  listarEventos() {
    let url = localStorage.getItem("urlAPI") + "/api/evento";
    let key = Util.gerarChaveAPI("/api/evento");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  cadastrarEstudante(postData: any) {
    let url = localStorage.getItem("urlAPI") + "/api/students/post";
    let key = Util.gerarChaveAPI("/api/students/post");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Accept", 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.post(url, postData, { headers: headers }).toPromise();
  }

}
