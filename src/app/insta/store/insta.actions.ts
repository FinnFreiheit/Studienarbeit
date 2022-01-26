import { createAction, props } from '@ngrx/store';

export const loadPictureId = createAction(
  '[insta] load PictureId',
  props<{id:number}>()
);
