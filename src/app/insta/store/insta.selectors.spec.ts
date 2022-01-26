import * as fromInsta from './insta.reducer';
import { selectInstaState } from './insta.selectors';

describe('Insta Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInstaState({
      [fromInsta.instaFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
