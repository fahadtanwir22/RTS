import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHNComponent } from './modules/home/pages/search-hn/search-hn.component';
import { HistoryComponent } from './modules/home/pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHNComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
