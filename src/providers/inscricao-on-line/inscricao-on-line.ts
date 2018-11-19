import { Injectable } from '@angular/core';
import { Util } from '../../app/util';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InscricaoOnLineProvider {
  
  constructor(public http: Http) {

  }

  listarInscricaoOnLineTotalCategoriaPorEvento(cod_evento_eve: string) {
    let url = localStorage.getItem("urlAPI") + "/api/InscricaoOnLine/ListarInscricaoOnLineTotalCategoriaPorEvento?cod_evento_eve=" + cod_evento_eve;
    let key = Util.gerarChaveAPI("/api/InscricaoOnLine/ListarInscricaoOnLineTotalCategoriaPorEvento");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  listarInscricaoCursoTotalPorEvento(cod_evento_eve: string) {
    let url = localStorage.getItem("urlAPI") + "/api/InscricaoOnLine/ListarInscricaoCursoTotalPorEvento?cod_evento_eve=" + cod_evento_eve;
    let key = Util.gerarChaveAPI("/api/InscricaoOnLine/ListarInscricaoCursoTotalPorEvento");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

  listarInscricaoExtraTotalPorEvento(cod_evento_eve: string) {
    let url = localStorage.getItem("urlAPI") + "/api/InscricaoOnLine/ListarInscricaoExtraTotalPorEvento?cod_evento_eve=" + cod_evento_eve;
    let key = Util.gerarChaveAPI("/api/InscricaoOnLine/ListarInscricaoExtraTotalPorEvento");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + key);

    return this.http.get(url, { headers: headers }).toPromise();
  }

}
