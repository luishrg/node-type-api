import UserModel from '../models/User'

class Validator {
  public async email (email: string): Promise<ErrorResponse> {
    const user = await UserModel.findOne({ email: email })
    if (user) {
      return {
        error: true,
        code: 400,
        message: 'Email já cadastrado'
      }
    } else {
      return {
        error: false
      }
    }
  }
}

interface ErrorResponse {
    error?: boolean,
    code?: number,
    message?: string
}

export default new Validator()
