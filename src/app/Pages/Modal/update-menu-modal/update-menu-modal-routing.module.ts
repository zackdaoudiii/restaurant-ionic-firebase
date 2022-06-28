import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMenuModalPage } from './update-menu-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMenuModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMenuModalPageRoutingModule {}
