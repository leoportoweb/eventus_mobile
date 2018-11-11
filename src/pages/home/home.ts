import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { EventoProvider } from '../../providers/evento/evento';
//import { UsuarioProvider } from '../../providers/usuario/usuario';
//import { Util } from '../../app/util';
import { LoginPage } from '../login/login';
import { ValoresPage } from '../valores/valores';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //teste: any;
  //cepDigitado: number;
  //endereco: any;

  //usuarios: any;
  //usuarios2: any;
  erro: any;
  responseEvento: any;

  response: any;
  eventos: any;
  loading: any;

  connected: Subscription;
  disconnected: Subscription;

  constructor(public navCtrl: NavController,
    private eventoProvider: EventoProvider,
    private network: Network,
    public loadindCtrl: LoadingController,
    private toastCtrl: ToastController) {

    this.loading = loadindCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    this.loading.present();

    //this.teste = Util.gerarChaveAPI("/api/evento");
  }

  ionViewDidLoad() {
    this.eventoProvider.listarEventos().then((response) => {
      this.responseEvento = response;
      console.log(response);
      this.eventos = response.json();
      //console.log(this.eventos);
      //console.log(this.estudantes[0].FirstName);
    }).catch((err) => {
      //console.log(err);
      this.presentToast(err);
    });

    this.loading.dismiss();

    //this.buscarEndereco();

    /*
    this.usuarioProvider.listarUsuario().then((response) => {
      this.usuarios = response.json();
    }).catch((err) => {
      this.erro = err;
    });

    this.usuarioProvider.listarUsuario2().then((response) => {
      this.usuarios2 = response.json();
    }).catch((err) => {
      this.erro = err;
    });
    */
  }

  ionViewDidEnter() {
    this.connected = this.network.onConnect().subscribe(data => {
      //console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      //console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  ionViewWillLeave() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  irParaInscricao(cod_evento_eve: number) {
    //console.log(cod_evento_eve);
    localStorage.setItem("cod_evento_eve", cod_evento_eve.toString());
    this.navCtrl.push(ValoresPage);
  }

  irParaAcessoRestrito(cod_evento_eve: number) {
    //console.log(cod_evento_eve);
    localStorage.setItem("cod_evento_eve", cod_evento_eve.toString());
    this.navCtrl.push(LoginPage);
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.presentToast('You are now ' + connectionState + ' via ' + networkType.toString());
  }

  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'/*,
      showCloseButton: true,
      closeButtonText: 'OK'*/
    });
    toast.present();
  }

  /*
  buscarEndereco() {
    this.cepDigitado = 40140020;
    this.eventoProvider.listarEndereco(this.cepDigitado).then((response) => {
      //this.response = JSON.stringify(response);
      this.response = response.json();
      this.endereco = this.response.logradouro;
      //console.log(this.response.logradouro);
    }).catch((err) => {
      this.presentToast(err);
      //console.log(err);
    });
  }
  */

  /*
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
  */
}
