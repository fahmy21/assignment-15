import { Model } from "mongoose";
import { IUser } from "../../common";

export class DatabaseRepository<IUser> {

    constructor(private model: Model<IUser>) {
    }

    create(data: IUser) {
        return this.model.create(data);
    }
}