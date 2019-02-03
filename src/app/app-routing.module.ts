import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, InfoComponent, SignupComponent, QuestionsComponent, SponsorsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
