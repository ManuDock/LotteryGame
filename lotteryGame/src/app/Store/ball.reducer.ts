import {Action, createReducer, on} from '@ngrx/store';
import { IBall } from '../Models/ball.interface';
import * as BallActions from './ball.actions';

export interface IBallState {
    entities: IBall[];
    loading: boolean;
}


export const InitialState: IBallState = {
    entities: [],
    loading: false,
}
export const reducer = createReducer(
    InitialState
);


export function BallReducer(state: IBallState, action: Action):IBallState{
    return reducer(state, action);
  }