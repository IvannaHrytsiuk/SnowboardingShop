import { TestBed } from '@angular/core/testing';

import { AdminPartnersService } from './admin-partners.service';

describe('AdminPartnersService', () => {
  let service: AdminPartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
