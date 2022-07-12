import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentChangeComponent } from './content-change/content-change.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/list",
    pathMatch:"full",
  },
  { 
    path:"list",
    component: ContentListComponent,
  },
  { 
    path:"addContent",
    component: ContentChangeComponent,
  },
  {
    path:"detail/:id",
    component: ContentDetailsComponent,
  },
  {
    path:"updateContent/:id",
    component: ContentChangeComponent,
  },
  {
    path:"search",
    component: ContentSearchComponent,
  },
  {
    path:"**",
    component: PagenotfoundComponent,
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
