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

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TraveltypePipe,
    HighlightImportantDataDirective,
    HighlightTitleDirective,
    ContentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
