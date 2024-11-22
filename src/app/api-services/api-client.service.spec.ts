import { TestBed } from '@angular/core/testing';

import { ApiClientService } from './api-client.service';
import { provideHttpClient } from '@angular/common/http';

describe('ApiClientServiceService', () => {
  let service: ApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiClientService, provideHttpClient()]});
    service = TestBed.inject(ApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('find out URL this should not be null', () => {
    var r = service.apiURL !=  null;
    expect(r).toBeTrue();
  });

  it('find out HttpOptions this should not be null', () => {
    var r = service.httpOptions !=  null;
    expect(r).toBeTrue();
  });

  it('should call the service', () => {
    expect(service.getUsers).toBeTruthy();
  });
});
