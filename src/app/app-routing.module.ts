import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SlideshowComponent } from './gallery/slideshow/slideshow.component';
import { ContactComponent } from './contact/contact.component'
import { TestimonialComponent } from './testimonial/testimonial.component'


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      
    ]
  },
  { 
    path: 'gallery', 
    component: GalleryComponent 
  },
  {
    path: 'gallery/slideshow',
    component: SlideshowComponent,
    // data: { title: 'Heroes List' }
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'testimonial',
    component: TestimonialComponent 
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
