import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { EventosComponent } from './eventos/eventos.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CinemasComponent } from './cinemas/cinemas.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      {path: 'cinemas', component: CinemasComponent }
   
    ])
  ],
  declarations: [ AppComponent, HelloComponent, EventosComponent,  CinemasComponent],
  bootstrap:    [ AppComponent, EventosComponent ]
})
export class AppModule { }
