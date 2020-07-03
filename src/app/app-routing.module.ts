import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AdminTeamComponent } from './admin/admin-team/admin-team.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { EventsComponent } from './pages/events/events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'register', component: RegisterComponent},
  {path:'shop/:category', component: ShopComponent},
  {path:'shop', component: ShopComponent},
  {path:'experiences', component: ExperiencesComponent},
  {path:'team', component: TeamComponent},
  {path:'team/:name/:id', component: TeamDetailsComponent},
  {path:'events', component: EventsComponent},
  {path:'events/:name/:id', component: EventDetailsComponent},
  {path:'shop/:categories/:id', component: ProductDetailsComponent},  
  {path:'admin', component: AdminComponent, children:[
    {path:'', redirectTo:'products', pathMatch:'full'},
    {path:'events', component: AdminEventsComponent},
    {path:'products', component: AdminProductsComponent},
    {path:'teams', component: AdminTeamComponent},
    {path:'category', component: CategoryAdminComponent},
    {path:'register-customers', component: AdminRegisterComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
