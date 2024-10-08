import {authFeature} from "@core/auth/data-access/+state/auth.reducer";
import {createSelector} from "@ngrx/store";

export const { selectAuthStatus, selectAuthToken, selectError } = authFeature;

export const selectIsAuthenticated = createSelector(
  selectAuthStatus ,
  (loadingStatus) => loadingStatus === 'loaded'
);
