import { IBall } from "./ball.interface";

export interface IBet {
    minimumBet: number;
    betAmount: number;
    balls: IBall[];
    result: IBall;
}