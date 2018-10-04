import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  listarEstudantes() {
    let url = "http://localhost:57443/api/students/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Bearer ' + localStorage.getItem('alertaBrasil'));

    return this.http.get(url, { headers: headers }).toPromise();
  }

  cadastrarEstudante(postData: any) {
    let url = "http://localhost:57443/api/students/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Accept", 'application/json');
    //headers.append('Authorization', 'Bearer ' + localStorage.getItem('alertaBrasil'));

    return this.http.post(url, postData, { headers: headers }).toPromise();
  }

}
