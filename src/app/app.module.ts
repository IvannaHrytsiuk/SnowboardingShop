import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './preloading-config';


// ngx-bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';


// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AdminTeamComponent } from './admin/admin-team/admin-team.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { EventsComponent } from './pages/events/events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StikyHeaderDirective } from './shared/directives/stiky-header.directive';
import { CareersComponent } from './pages/careers/careers.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AdminPartnersComponent } from './admin/admin-partners/admin-partners.component';
import { HelpComponent } from './pages/help/help.component';
import { DeliveryComponent } from './pages/help/delivery/delivery.component';
import { ReturnsComponent } from './pages/help/returns/returns.component';
import { WarrantyComponent } from './pages/help/warranty/warranty.component';
import { PrivacyComponent } from './pages/help/privacy/privacy.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminProductsComponent,
    AdminEventsComponent,
    AdminRegisterComponent,
    CustomerComponent,
    RegisterComponent,
    CategoryAdminComponent,
    ShopComponent,
    ProductDetailsComponent,
    AdminTeamComponent,
    TeamComponent,
    TeamDetailsComponent,
    EventsComponent,
    EventDetailsComponent,
    ExperiencesComponent,
    BlogComponent,
    AdminBlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    StikyHeaderDirective,
    CareersComponent,
    PartnersComponent,
    AdminPartnersComponent,
    HelpComponent,
    DeliveryComponent,
    ReturnsComponent,
    WarrantyComponent,
    PrivacyComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule,
    ButtonsModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
