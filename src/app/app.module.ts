import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AppComponent,
  NavigationBarComponent,
  HomeComponent,
  HeaderComponent,
  ScheduleComponent,
  SignupComponent,
  QuestionsComponent,
  FoodComponent,
  LocationComponent
} from './components';
import { HttpClientModule } from '@angular/common/http';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    HeaderComponent,
    ScheduleComponent,
    SignupComponent,
    QuestionsComponent,
    FoodComponent,
    LocationComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
