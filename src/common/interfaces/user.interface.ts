import { GenderEnums, ProviderEnums, RoleEnums } from "../enums/user.enums";

export interface IUser{
    UserName:string,
    FirstName:string,
    LastName:string,
    Email:string,
    PhoneNumber:string,
    Password:string,
    ConfirmEmail:boolean,
    Gender?:GenderEnums,
    Provider?:ProviderEnums,
    Role?:RoleEnums
}