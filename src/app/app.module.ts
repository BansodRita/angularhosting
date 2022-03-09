import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';
import { HeroComponent } from './site/hero/hero.component';
import { ProfileComponent } from './site/profile/profile.component';
import { SuccessStoriesComponent } from './site/success-stories/success-stories.component';
import { MapComponent } from './site/map/map.component';
import { GuestMessageComponent } from './site/guest-message/guest-message.component';
import { AboutComponent } from './site/about/about.component';
import { HappyClientComponent } from './site/happy-client/happy-client.component';
import { TeamComponent } from './site/team/team.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './site/contact-form/contact-form.component';
import { NewMatchesComponent } from './pages/new-matches/new-matches.component';
import { ViwedProfileComponent } from './pages/viwed-profile/viwed-profile.component';
import { PremiumMemberComponent } from './pages/premium-member/premium-member.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProfileComponent,
    SuccessStoriesComponent,
    MapComponent,
    GuestMessageComponent,
    AboutComponent,
    HappyClientComponent,
    TeamComponent,
    AboutUsComponent,
    MainComponent,
    ContactComponent,
    ContactFormComponent,
    NewMatchesComponent,
    ViwedProfileComponent,
    PremiumMemberComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
