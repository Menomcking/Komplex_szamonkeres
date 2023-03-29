import { IsDefined } from "class-validator";
import { isUndefined } from "util";

export class TransferDto{
    @IsDefined({message: 'a tranzakció összegét meg kell adni.'})
    amount: number;
}