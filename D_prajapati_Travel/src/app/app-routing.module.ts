import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSearchComponent } from './content-search/content-search.component';

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
    path:"detail/:id",
    component: ContentDetailsComponent,
  },
  {
    path:"search",
    component: ContentSearchComponent,
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
