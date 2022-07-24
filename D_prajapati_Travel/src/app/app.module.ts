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
import { ContentChangeComponent } from './content-change/content-change.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
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
    ContentLinkComponent,
    ContentChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
