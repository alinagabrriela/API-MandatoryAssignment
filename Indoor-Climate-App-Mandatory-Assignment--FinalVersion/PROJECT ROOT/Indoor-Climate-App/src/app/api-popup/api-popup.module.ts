import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiPopupPageRoutingModule } from './api-popup-routing.module';

import { ApiPopupPage } from './api-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPopupPageRoutingModule
  ],
  declarations: [ApiPopupPage]
})
export class ApiPopupPageModule {}
