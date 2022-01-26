import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  public searchHistory: any;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.searchHistory = this.searchService.getSearchHistory();
  }
}
