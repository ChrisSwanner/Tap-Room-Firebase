import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { BeerTapComponent } from './beer-tap/beer-tap.component';
import { AdminComponent } from './admin/admin.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { firebaseConfig } from './api-keys';

export const fireConfig = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  storageBucket: firebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // AboutComponent,
    // beerTapComponent,
    // AdminComponent,
    // EditBeerComponent,
    BeerTapComponent,
    AdminComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
