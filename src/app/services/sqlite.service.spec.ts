import { TestBed } from '@angular/core/testing';

import { SqliteService } from './sqlite.service';
import { provideHttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

describe('SqliteService', () => {
  let service: SqliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SqliteService, provideHttpClient()]});
    service = TestBed.inject(SqliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get db name', () => {
    expect(service.getDbName()).toBeTruthy();
  });

  it('should be init app', () => {
    expect(service.init()).toBeTruthy();
  });
  
  it('should dbReady be a instance of BehaviorSubject', () => {
    expect(service.dbReady).toBeInstanceOf(BehaviorSubject<Boolean>);
  });
});
