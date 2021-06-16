import { createSelector } from "@ngrx/store";
import {IAppState} from "./index";


const selectAppState = (state: IAppState) => state;
export const selectBallState = (state: IAppState) => state.balls;
export const selectBalls = createSelector(selectBallState, state => state.entities);
export const selectLoading = createSelector(selectBallState, state => state.loading);

