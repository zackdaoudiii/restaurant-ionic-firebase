import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMenuModalPageRoutingModule } from './update-menu-modal-routing.module';

import { UpdateMenuModalPage } from './update-menu-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMenuModalPageRoutingModule
  ],
  declarations: [UpdateMenuModalPage]
})
export class UpdateMenuModalPageModule {}
