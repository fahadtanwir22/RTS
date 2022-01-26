import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryComponent } from './modules/home/pages/history/history.component';
import { SearchHNComponent } from './modules/home/pages/search-hn/search-hn.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchHNComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },

  {
    path: '**',
    redirectTo: 'search'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
