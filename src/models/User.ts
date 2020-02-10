import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document{
  email?: string,
  firstName?: string,
  lastName?: string,
  fullName(): string
}

const UserModel = new Schema({
  email: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
}, {
  timestamps: true
})

UserModel.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserModel)
