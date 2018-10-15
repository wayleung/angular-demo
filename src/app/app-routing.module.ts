import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  // imports: [
  //   CommonModule
  // ]
  // ,
  // declarations: []
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
