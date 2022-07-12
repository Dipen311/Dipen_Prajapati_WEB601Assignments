import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TraveltypePipe } from './traveltype.pipe';
import { HighlightImportantDataDirective } from './directive/highlight-important-data.directive';
import { HighlightTitleDirective } from './directive/highlight-title.directive';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContentLinkComponent } from './content-link/content-link.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TraveltypePipe,
    HighlightImportantDataDirective,
    HighlightTitleDirective,
    ContentDetailsComponent,
    ContentSearchComponent,
    PagenotfoundComponent,
    ContentLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
