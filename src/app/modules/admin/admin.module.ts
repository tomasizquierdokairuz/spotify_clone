import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEditComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
