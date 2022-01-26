import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import * as moment from 'moment';
import { searchHistory } from 'src/app/shared/models/history';

@Component({
  selector: 'app-search-hn',
  templateUrl: './search-hn.component.html',
  styleUrls: ['./search-hn.component.css'],
})
export class SearchHNComponent implements OnInit {
  public changeView: boolean = true;
  public hitsData: any = [];
  public query: string = '';
  public tag: string = 'All';
  public headers: any = ['All', 'story', 'comment'];
  public username: string = '';
  public searchHistory: string[] = [];

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {}

  searchHackerNews() {
    this.searchService.searchNews(this.query, this.tag).subscribe(
      (data) => {
        let historyObj: searchHistory = {
          query: this.query,
          tag: this.tag,
        };
        this.searchService.setSearchHistory(historyObj);
        this.hitsData = data.hits;
      },
      (response) => {
        alert(
          'We are sorry, there was a problem connecting to the server.  Please try again shortly.'
        );
      },
      () => {}
    );
  }

  inputSearch(event: any) {
    this.query = event.target.value;
  }

  onSearch() {
    this.searchHackerNews();
    this.changeView = false;
  }

  dropdownSelect(e: any) {
    this.tag = e.target.value;
  }

  difference(date: Date) {
    date = new Date(date);
    let currentDate = moment(Date.now());
    var years = currentDate.diff(date, 'years');
    currentDate.add(-years, 'years');
    var months = currentDate.diff(date, 'months');
    currentDate.add(-months, 'months');
    var days = currentDate.diff(date, 'days');
    let result = '';
    if (years > 0) {
      result = years + ' years ago';
    } else if (months > 0) {
      result = months + ' months ago';
    } else if (days > 0) {
      result = days + ' days ago';
    } else {
      new Date(date);
    }
    return result;
  }
}
