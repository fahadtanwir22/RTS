import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHNComponent } from './search-hn.component';

describe('SearchHNComponent', () => {
  let component: SearchHNComponent;
  let fixture: ComponentFixture<SearchHNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchHNComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
