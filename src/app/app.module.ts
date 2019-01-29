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
import { HttpClientModule } from '@angular/common/http';

import {
  AppComponent,
  NavigationBarComponent,
  HomeComponent,
  HeaderComponent,
  ScheduleComponent,
  SignupComponent,
  QuestionsComponent,
  FoodComponent,
  LocationComponent,
  CurriculumComponent,
  SponsorsComponent
} from './components';

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
    SponsorsComponent,
    CurriculumComponent
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
