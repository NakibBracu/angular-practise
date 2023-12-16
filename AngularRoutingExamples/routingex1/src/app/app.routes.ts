import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { CategoriesComponent } from './Components/categories/categories.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},
{
    path:'users',
    component:UsersComponent
},
{
    path:'categories',
    component:CategoriesComponent
}
];
