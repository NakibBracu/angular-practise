import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './areas/public/public.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    loadChildren:()=>import('./areas/public/public.module').then(m=>m.PublicModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
