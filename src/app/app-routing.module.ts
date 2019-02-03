import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, SignupComponent, ScheduleComponent, LocationComponent, CurriculumComponent, FoodComponent, QuestionsComponent, SponsorsComponent } from './components';

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
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
    path: 'food',
    component: FoodComponent
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
