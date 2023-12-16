import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { TestComponent } from './TestComponent/test.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PublicComponent } from './areas/public/public.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    PublicComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HeaderComponent,
   FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
