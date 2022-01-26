import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { searchHistory } from 'src/app/shared/models/history';
import { SearchHackerNews } from 'src/app/shared/models/search-hacker-news';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchHistory: searchHistory[] = [];

  constructor(private http: HttpClient) {}

  setSearchHistory(history: any) {
    this.searchHistory.push(history);
    console.log(this.searchHistory);
  }

  getSearchHistory(): any {
    return this.searchHistory;
  }

  searchNews(query: string, tag: string): Observable<SearchHackerNews> {
    let url = `http://hn.algolia.com/api/v1/search?query=${query}${
      tag !== 'All' ? '&tags=' + tag : ''
    }`;
    return this.http.get<SearchHackerNews>(url);
  }
}
