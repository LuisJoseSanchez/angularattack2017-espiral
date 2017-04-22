import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Import the KendoUI components...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

// Custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcopointsListComponent } from './ecopoints-list/ecopoints-list.component';

// Custom service
import { EcopointsService } from './model/ecopoints.service';
import { EcopointsMapComponent } from './ecopoints-map/ecopoints-map.component';

const appRoutes: Routes = [

  /*
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
  {
    path: '',
    component: EcopointsListComponent
  },
  {
    path: 'ecopoints-map',
    component: EcopointsMapComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EcopointsListComponent,
    EcopointsMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    GridModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EcopointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
