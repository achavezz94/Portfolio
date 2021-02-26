import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingChallengesComponent } from './coding-challenges/coding-challenges.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path:'coding-challenges',
    component: CodingChallengesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
