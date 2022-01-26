import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInsta from './insta.reducer';

export const selectInstaState = createFeatureSelector<fromInsta.State>(
  fromInsta.instaFeatureKey
);
