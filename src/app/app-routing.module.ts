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
<<<<<<< HEAD
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AdminPartnersComponent } from './admin/admin-partners/admin-partners.component';
import { HelpComponent } from './pages/help/help.component';
import { DeliveryComponent } from './pages/help/delivery/delivery.component';
import { ReturnsComponent } from './pages/help/returns/returns.component';
import { WarrantyComponent } from './pages/help/warranty/warranty.component';
import { PrivacyComponent } from './pages/help/privacy/privacy.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
=======

>>>>>>> 33a0a0c... first commit


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
<<<<<<< HEAD
  {path:'contact', component: ContactComponent},
=======
>>>>>>> 33a0a0c... first commit
  {path: 'customer', component: CustomerComponent},
  {path: 'register', component: RegisterComponent},
  {path:'shop/:category', component: ShopComponent},
  {path:'shop', component: ShopComponent},
  {path:'experiences', component: ExperiencesComponent},
  {path:'team', component: TeamComponent},
  {path:'team/:name/:id', component: TeamDetailsComponent},
<<<<<<< HEAD
  {path:'blog', component: BlogComponent},
  {path:'blog/:title/:id', component: BlogDetailsComponent},
  {path:'events', component: EventsComponent},
  {path:'careers', component: CareersComponent},
  {path:'partners', component: PartnersComponent},
=======
  {path:'events', component: EventsComponent},
>>>>>>> 33a0a0c... first commit
  {path:'events/:name/:id', component: EventDetailsComponent},
  {path:'shop/:categories/:id', component: ProductDetailsComponent},  
  {path:'admin', component: AdminComponent, children:[
    {path:'', redirectTo:'products', pathMatch:'full'},
    {path:'events', component: AdminEventsComponent},
    {path:'products', component: AdminProductsComponent},
    {path:'teams', component: AdminTeamComponent},
<<<<<<< HEAD
    {path:'partners', component: AdminPartnersComponent},
    {path:'category', component: CategoryAdminComponent},
    {path:'admin-blog', component: AdminBlogComponent},
    {path:'register-customers', component: AdminRegisterComponent}
  ]},
  {path:'help', component: HelpComponent, children:[
    // {path:'', redirectTo:'delivery', pathMatch:'full'},
    {path:'delivery', component: DeliveryComponent},
    {path:'returns', component: ReturnsComponent},
    {path:'warranty', component: WarrantyComponent},
    {path:'privacy-policy', component: PrivacyComponent}
  ]},
=======
    {path:'category', component: CategoryAdminComponent},
    {path:'register-customers', component: AdminRegisterComponent}
  ]},
>>>>>>> 33a0a0c... first commit

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
