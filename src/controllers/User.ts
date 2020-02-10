import { Request, Response } from 'express'

import UserModel from '../models/User'

import Validator from '../utils/Validator'

class UserController {
  public async list (req: Request, res: Response): Promise<Response> {
    let users = await UserModel.find().lean()

    users = users.map(user => new UserModel(user).fullName())
    return res.status(200).json({ users })
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { email, firstName, lastName } = req.body
    const emailValidation = await Validator.email(email)

    if (emailValidation.error) {
      return res.status(emailValidation.code).json({
        error: true,
        message: emailValidation.message
      })
    }

    const user = new UserModel({
      email,
      firstName,
      lastName
    })
    await user.save()
    return res.status(201).json({ user })
  }
}

export default new UserController()
