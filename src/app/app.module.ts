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
import { LoaderComponent } from './components/loader/loader.component';
import { GalleryAllComponent } from './components/gallery-main/gallery-all/gallery-all.component';
import { GalleryBirdsComponent } from './components/gallery-main/gallery-birds/gallery-birds.component';
import { GalleryDogsComponent } from './components/gallery-main/gallery-dogs/gallery-dogs.component';
import { GallerySquirrelsComponent } from './components/gallery-main/gallery-squirrels/gallery-squirrels.component';
import { GalleryFaunalfriendshipsComponent } from './components/gallery-main/gallery-faunalfriendships/gallery-faunalfriendships.component';

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
    LoaderComponent,
    GalleryAllComponent,
    GalleryBirdsComponent,
    GalleryDogsComponent,
    GallerySquirrelsComponent,
    GalleryFaunalfriendshipsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
