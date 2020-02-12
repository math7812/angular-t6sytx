import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { CinemasFormComponent } from './cinemas-form/cinemas-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
 RouterModule.forRoot([
      { path: 'lista', component: CinemasListComponent },
      {path: 'novo', component: CinemasFormComponent }
   
    ])

  ],
  declarations: [CinemasListComponent, CinemasFormComponent]
})
export class CursosModule { }