import { createAction, props } from '@ngrx/store';

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



//ADD BET
export const AddBetAction = createAction(ActionTypes.ADD_BET);

