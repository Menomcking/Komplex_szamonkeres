import { IsDefined } from "class-validator";

export class CreateOwnerDto {
    @IsDefined({message: 'A név megadása kötelező.'})
    fullName: string;

    @IsDefined({message: 'Az üzleti státusz megléte vagy hiánya megadása kötelező.'})
    business: boolean;
}
