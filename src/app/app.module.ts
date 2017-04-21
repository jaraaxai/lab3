import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MyGuard } from './myguard.service';
import {DbService} from './db.service';


const appRoutes: Routes = [
  { path: 'homepage', component: CrisisListComponent },
  { path: 'profile/:id',
    component: HeroDetailComponent,
    canActivate: [MyGuard]
  },
  {
    path: 'students',
    component: HeroListComponent,
    data: { title: 'Students List' }
  },
  { path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroDetailComponent,
    PageNotFoundComponent,
    HeroListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DbService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
