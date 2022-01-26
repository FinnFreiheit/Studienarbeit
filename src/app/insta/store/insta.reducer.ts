import { Action, createReducer, on } from '@ngrx/store';
import * as InstaActions from './insta.actions';

export const instaFeatureKey = 'insta';

export interface State {
  pictureId: number;
}

export const initialState: State = {
  pictureId: 0,
};

export const reducer = createReducer(
  initialState,
  on(InstaActions.loadPictureId, (state, action) => {
    return {
      ...state,
      pictureId: action.id,
    };
  }),

);
