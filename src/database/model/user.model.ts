import mongoose from "mongoose"
import { GenderEnums, IUser, ProviderEnums, RoleEnums } from "../../common"

const UserSchema = new mongoose.Schema<IUser>({
    FirstName: String,
    LastName: String,
    Email: {
        type: String,
        unique: true
    },
    PhoneNumber: String,
    Password: String,
    ConfirmEmail: Boolean,
    Gender: {
        type: Number,
        default: GenderEnums.Male

    },
    Role: {
        type: Number,
        default: RoleEnums.User

    },
    Provider: {
        type: Number,
        default: ProviderEnums.System

    },
}, {
    timestamps: true
})

UserSchema.virtual("UserName").set(function (value) {
    let [FirstName, LastName] = value.split(" ")
    this.FirstName = FirstName
    this.LastName = LastName
}).get(function () {
    return `${this.FirstName} ${this.LastName}`
})


const UserModel = mongoose.model<IUser>("user", UserSchema)
export default UserModel