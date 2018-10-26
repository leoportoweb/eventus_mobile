import { Injectable } from '@angular/core';
import { Util } from '../../app/util';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioProvider {

  constructor(public http: Http) {
  }

  listarUsuario() {
    let url = localStorage.getItem("urlAPI") + "/api/usuario";
    let key = Util.gerarChaveAPI("/api/usuario");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  listarUsuario2() {
    let url = localStorage.getItem("urlAPI") + "/api/usuario";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, { headers: headers }).toPromise();
  }

}
