import { createAction, props } from '@ngrx/store';
import { IBall } from '../Models/ball.interface';

export enum ActionTypes {
    FETCH_BALLS = '[Ball] Fetch ball',
    FETCH_BALLS_SUCCESS = '[Ball] Fetch ball success',
    FETCH_BALLS_ERROR = '[Ball] Fetch ball error',

    ADD_BET = '[Bet] Bet add',
    ADD_BET_SUCCESS = '[Bet] Bet add success',
    ADD_BET_ERROR = '[Bet] Bet add error',
}

//GET
export const FetchBallAction = createAction(ActionTypes.FETCH_BALLS);
export const FetchBallSuccessAction = createAction(ActionTypes.FETCH_BALLS_SUCCESS, props<{ball: IBall[]}>());
export const FetchBallErrorAction = createAction(ActionTypes.FETCH_BALLS_ERROR);

//ADD BET
export const AddBetAction = createAction(ActionTypes.ADD_BET, props<{ball: IBall}>());
export const AddBetSuccessAction = createAction(ActionTypes.ADD_BET_SUCCESS, props<{ball: IBall}>())
export const AddBetErrorAction = createAction(ActionTypes.ADD_BET_ERROR);



