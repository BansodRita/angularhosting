import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NewMatchesComponent } from './pages/new-matches/new-matches.component';
import { PremiumMemberComponent } from './pages/premium-member/premium-member.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'main', component:MainComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactComponent},
  {path:'match',component:NewMatchesComponent},
  {path:'member',component:PremiumMemberComponent},
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
