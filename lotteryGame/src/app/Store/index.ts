import {Action, ActionReducerMap, MetaReducer, State} from '@ngrx/store';
import {BallReducer, IBallState} from "./ball.reducer";

export interface IAppState {
  balls:IBallState
}

export const reducers: ActionReducerMap<any, Action> = {
  balls: BallReducer
};

export const metaReducers: MetaReducer<IAppState>[] = [];
