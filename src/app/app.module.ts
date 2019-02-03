import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  AppComponent,
  NavigationBarComponent,
  HomeComponent,
  HeaderComponent,
  SignupComponent,
  QuestionsComponent,
  SponsorsComponent,
  InfoComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    QuestionsComponent,
    SponsorsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
