import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxPopper } from 'angular-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AngularFireModule} from '@angular/fire' ;
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    DetailsClientComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
