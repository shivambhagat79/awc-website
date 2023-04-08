import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InitiativesComponent } from './pages/initiatives/initiatives.component';
import { DonationComponent } from './pages/donation/donation.component';
import { GalleryNavComponent } from './components/gallery-nav/gallery-nav.component';
import { GalleryMainComponent } from './components/gallery-main/gallery-main.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    FaqsComponent,
    FooterComponent,
    TestimonialsComponent,
    HomeComponent,
    GalleryComponent,
    InitiativesComponent,
    DonationComponent,
    GalleryNavComponent,
    GalleryMainComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
