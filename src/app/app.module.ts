import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ValoresPage } from '../pages/valores/valores';
import { ValoresCursoPage } from '../pages/valores-curso/valores-curso';
import { ValoresExtraPage } from '../pages/valores-extra/valores-extra';
import { InscricaoTotalPage } from '../pages/inscricao-total/inscricao-total';
import { CategoriaTotalPage } from '../pages/categoria-total/categoria-total';
import { CursoTotalPage } from '../pages/curso-total/curso-total';
import { ExtraTotalPage } from '../pages/extra-total/extra-total';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { UserHomePage } from '../pages/user-home/user-home';

import { EventoProvider } from '../providers/evento/evento';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { InscricaoOnLineProvider } from '../providers/inscricao-on-line/inscricao-on-line';
import { NetworkProvider } from '../providers/network/network';
import { CursoProvider } from '../providers/curso/curso';
import { ExtraProvider } from '../providers/extra/extra';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ValoresPage,
    ValoresCursoPage,
    ValoresExtraPage,
    InscricaoTotalPage,
    CategoriaTotalPage,
    CursoTotalPage,
    ExtraTotalPage,
    AdminHomePage,
    UserHomePage
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
    LoginPage,
    ValoresPage,
    ValoresCursoPage,
    ValoresExtraPage,
    InscricaoTotalPage,
    CategoriaTotalPage,
    CursoTotalPage,
    ExtraTotalPage,
    AdminHomePage,
    UserHomePage
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
    InscricaoOnLineProvider,
    CursoProvider,
    ExtraProvider
  ]
})
export class AppModule {}
