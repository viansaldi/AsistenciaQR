import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundPage } from './page-not-found.page';

describe('PageNotFoundPage', () => {
  let component: PageNotFoundPage;
  let fixture: ComponentFixture<PageNotFoundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find out ngOnInit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should find out ngAfterContentChecked', () => {
    expect(component.ngAfterContentChecked).toBeTruthy();
  });
  
  it('should find out ngAfterViewInit', () => {
    expect(component.ngAfterViewInit).toBeTruthy();
  });
});
