import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InitiativesComponent } from './pages/initiatives/initiatives.component';
import { DonationComponent } from './pages/donation/donation.component';
import { GalleryAllComponent } from './components/gallery-main/gallery-all/gallery-all.component';
import { GalleryBirdsComponent } from './components/gallery-main/gallery-birds/gallery-birds.component';
import { GalleryDogsComponent } from './components/gallery-main/gallery-dogs/gallery-dogs.component';
import { GallerySquirrelsComponent } from './components/gallery-main/gallery-squirrels/gallery-squirrels.component';
import { GalleryFaunalfriendshipsComponent } from './components/gallery-main/gallery-faunalfriendships/gallery-faunalfriendships.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      { path: 'all', component: GalleryAllComponent },
      { path: 'birds', component: GalleryBirdsComponent },
      { path: 'dogs', component: GalleryDogsComponent },
      { path: 'squirrels', component: GallerySquirrelsComponent },
      {
        path: 'faunalfriendships',
        component: GalleryFaunalfriendshipsComponent,
      },
    ],
  },
  { path: 'initiatives', component: InitiativesComponent },
  { path: 'donation', component: DonationComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
