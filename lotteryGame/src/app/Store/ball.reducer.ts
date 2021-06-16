import {Action, createReducer, on} from '@ngrx/store';
import { IBall } from '../Models/ball.interface';
import * as BallActions from './ball.actions';
import { IBet } from '../Models/bet.interface';
import { state } from '@angular/animations';
import { BallService } from '../Services/ball-list.service';

export interface IBallState {
    entities: IBall[];
    loading: boolean;
}


export const InitialState: IBallState = {
    entities: [],
    loading: false,
}
export const reducer = createReducer(
    InitialState,
    //GET
    on(BallActions.FetchBallAction, (state: IBallState) =>{
        return {
            ...state,
            loading: true,
        };
    }),
    on(BallActions.FetchBallSuccessAction,
        (state: IBallState, { balls }) => {
          return {
            ...state,
            entities: balls,
            loading: false,
          };
    }),
    on(BallActions.FetchBallErrorAction, (state: IBallState) => {
        return {
          ...state,
          loading: false,
        };
      }),
    //ADD-BET
    on(BallActions.AddBetAction, (state: IBallState) => {
        return {
          ...state,
          loading: true,
        };
      }),
      on(BallActions.AddBetSuccessAction, (state: IBallState, {ball}) => {
        return {
          ...state,
          entities: [...state.entities, ball],
        };
      }),
      on(BallActions.AddBetErrorAction, (state: IBallState) => {
        return {
          ...state,
          loading: false,
        };
      }),
);


export function BallReducer(state: IBallState, action: Action):IBallState{
    return reducer(state, action);
  }