import { Request, Response } from "express"
import { UserInterface, User } from "../models/User"

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        let user: UserInterface = await User.findByPk(1)
        return res.json({ user: user.idade, full: user.fullName() })
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        return res.json(user)
    }
}

export default new UserController()
