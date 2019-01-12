import { Injectable } from '@angular/core';
import { Util } from '../../app/util';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CursoProvider {

  constructor(public http: Http) {
    
  }

  listarPorEvento(cod_evento_eve: string) {
    let url = localStorage.getItem("urlAPI") + "/api/curso/ListarPorEvento?cod_evento_eve=" + cod_evento_eve;
    let key = Util.gerarChaveAPI("/api/curso/ListarPorEvento");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

}
