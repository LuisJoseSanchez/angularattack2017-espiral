import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Import the KendoUI components...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Import Angular Google Maps
import {AgmCoreModule} from '@agm/core';

// Custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcopointsListComponent } from './ecopoints-list/ecopoints-list.component';
import { EcopointsMapComponent } from './ecopoints-map/ecopoints-map.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';

// Custom service
import { EcopointsService } from './model/ecopoints.service';

const appRoutes: Routes = [
  {
    path: '',
    component: EcopointsMapComponent
  },
  {
    path: 'ecopoints-list',
    component: EcopointsListComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
    EcopointsMapComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAcVQLU6eB7BeZhYYQ3E0uPjdjLYEghrA'
    })
  ],
  providers: [EcopointsService],
  bootstrap: [AppComponent],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
