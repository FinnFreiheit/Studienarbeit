import * as fromInsta from './insta.actions';

describe('loadInstas', () => {
  it('should return an action', () => {
    expect(fromInsta.loadInstas().type).toBe('[Insta] Load Instas');
  });
});
