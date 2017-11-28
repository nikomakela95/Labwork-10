
//<!--Niko Mäkelä 1601538, Matias Rantanen 1601551-->
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//New references
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';


import { SettingsPage } from '../pages/settings/settings';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { WeatherProvider } from '../providers/weather/weather';


const firebaseAuth = {

  apiKey: "AIzaSyDlFHaNziIfXzcnod8Er4JSFiMffVJjiIk",
  authDomain: "labwork-8.firebaseapp.com",
  databaseURL: "https://labwork-8.firebaseio.com",
  projectId: "labwork-8",
  storageBucket: "labwork-8.appspot.com",
  messagingSenderId: "761506393825"
};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    
    
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    
    
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    WeatherProvider
  ]
})
export class AppModule {}
