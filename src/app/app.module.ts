import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetialComponent } from './hero-detial/hero-detial.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      HeroListComponent,
      HeroDetialComponent,
      SearchBoxComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
