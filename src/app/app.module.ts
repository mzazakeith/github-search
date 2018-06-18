import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './services/profile.service';
import {HttpModule} from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {SearchService} from './services/search.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [ProfileService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
