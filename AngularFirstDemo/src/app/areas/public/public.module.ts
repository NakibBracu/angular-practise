import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from '../../Components/header/header.component';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderComponent
  ]
})
export class PublicModule { }
