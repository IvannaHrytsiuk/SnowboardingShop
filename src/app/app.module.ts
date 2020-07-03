import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
