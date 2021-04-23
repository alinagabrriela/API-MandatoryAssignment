import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiPopupPage } from './api-popup.page';

const routes: Routes = [
  {
    path: '',
    component: ApiPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiPopupPageRoutingModule {}
