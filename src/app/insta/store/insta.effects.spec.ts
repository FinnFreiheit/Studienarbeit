import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InstaEffects } from './insta.effects';

describe('InstaEffects', () => {
  let actions$: Observable<any>;
  let effects: InstaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InstaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InstaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
