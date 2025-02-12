import { TestBed } from '@angular/core/testing';

import { GestionarhorarioService } from './gestionarhorario.service';

describe('GestionarhorarioService', () => {
  let service: GestionarhorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarhorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
