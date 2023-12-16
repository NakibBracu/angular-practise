import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './areas/public/public.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    loadChildren:()=>import('./areas/public/public.module').then(m=>m.PublicModule) 
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path: 'footer',
    component:FooterComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
