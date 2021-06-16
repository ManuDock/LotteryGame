
import { Action, Store } from '@ngrx/store';
import { IBallState } from "./ball.reducer";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BallService } from "../Services/ball-list.service";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as BallActions from './ball.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable
export class BallEffects {
    constructor(
        private action$: Actions,
        private ballService: BallService,
        private store: Store<IBallState>
    ) {}

    FetchBallAction$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BallActions.FetchBallAction),
            switchMap((action) =>
                this.ballService.getBall().pipe(
                    map(
                        (ball: any) => BallActions.FetchBallSuccessAction({balls}),
                        catchError((error:Error) => of(BallActions.FetchBallErrorAction()))
                    )
                )
            )
        )
    );
    AddBetAction$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BallActions.AddBetAction),
            switchMap((action) =>
                this.ballService.addBet().pipe(
                    map(
                        (bet:any) => BallActions.AddBetSuccessAction({ball}),
                        catchError(error:Error) => of(BallActions.AddBetErrorAction()))
                    )
                )
            )
        )

    );


}