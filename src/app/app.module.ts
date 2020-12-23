import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { OtherWorksComponent } from './components/other-works/other-works.component';

@NgModule({
  declarations: [AppComponent, SidemenuComponent, SearchComponent, ProjectListComponent, DetailComponent, OtherWorksComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
