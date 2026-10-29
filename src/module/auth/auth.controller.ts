import { Router, type Request, type Response } from "express";
import Auth_Service from "./auth.service";
import { Success_Response } from "../../common/excaptions/success.response";


const router: Router = Router();

router.post("/login", async (req: Request, res: Response) => {
    let login_user = await Auth_Service.login(req.body)
    Success_Response({ res, message: "login user", status: 200, data: login_user })
})

router.get("/get-all-user", async (req: Request, res: Response) => {
    let userdata = await Auth_Service.getalluser()
})
router.post("/signup", async (req: Request, res: Response) => {
    let signup = await Auth_Service.signup(req.body)
    Success_Response({res,message:"signup user",status:200, data:signup})
})









export default router