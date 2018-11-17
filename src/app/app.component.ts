import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { InscricaoTotalPage } from '../pages/inscricao-total/inscricao-total';
import { CategoriaTotalPage } from '../pages/categoria-total/categoria-total';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  //rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public network: Network,
    public networkProvider: NetworkProvider) {

    //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

    this.initializeApp();
    this.saveLocalInitialVariable();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Total de Inscrições', component: InscricaoTotalPage },
      { title: 'Total por Categoria', component: CategoriaTotalPage },
      { title: 'Logout', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.networkProvider.initializeNetworkEvents();
      
      // Offline event
      this.events.subscribe('network:offline', () => {
        //alert('network:offline ==> ' + this.network.type);
        //console.log('network:' + this.network.type);
      });

      // Online event
      this.events.subscribe('network:online', () => {
        //alert('network:online ==> ' + this.network.type);
        //console.log('network:' + this.network.type);
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  saveLocalInitialVariable() {
    //localStorage.setItem("urlAPI", "http://localhost:57443");
    localStorage.setItem("urlAPI", "https://evesix.insix.com.br");
  }
}
