import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ValoresPage } from '../pages/valores/valores';
import { InscricaoTotalPage } from '../pages/inscricao-total/inscricao-total';
import { CategoriaTotalPage } from '../pages/categoria-total/categoria-total';

import { EventoProvider } from '../providers/evento/evento';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { InscricaoOnLineProvider } from '../providers/inscricao-on-line/inscricao-on-line';
import { NetworkProvider } from '../providers/network/network';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ValoresPage,
    InscricaoTotalPage,
    CategoriaTotalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ValoresPage,
    InscricaoTotalPage,
    CategoriaTotalPage
  ],
  providers: [
    StatusBar,
    Network,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'pt' },
    EventoProvider,
    CategoriaProvider,
    UsuarioProvider,
    NetworkProvider,
    InscricaoOnLineProvider
  ]
})
export class AppModule {}
