import { IUser } from "../../common";
import { Bad_Request_Exception } from "../../common/excaptions/error.exceptions";
import UserModel from "../../database/model/user.model";
import { DatabaseRepository } from "../../database/reposatory/database.reposatory";

export class Auth_Service {

private userRepository: DatabaseRepository<IUser>

constructor() {
    this.userRepository = new DatabaseRepository(UserModel)
}
    async getalluser() {
        return "hello from all users"
    }

    async login(data: any) {
        return 'test'
    }
 async signup(data: IUser) {
    let addeduser =await this.userRepository.create(data);
    if(addeduser){
return addeduser

    }
    else{
        throw new Bad_Request_Exception("something with wrong")
    }
}
















}





export default new Auth_Service