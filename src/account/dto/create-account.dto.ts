import { IsDefined, IsInt, Min } from "class-validator";

export class CreateAccountDto {
    @IsDefined({message: 'A számlaszám megadása kötelező.'})
    accountNumber: string;

    @IsDefined({message: 'Az egyenleg megadása kötelező.'})
    @IsInt({message: 'Az egyenlegnek egész számnak kell lennie'})
    @Min(0,{message: 'Az egyenleg nem lehet negatív.'})
    balance: number;
}
