import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import the KendoUI components...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcopointsListComponent } from './ecopoints-list/ecopoints-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EcopointsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
