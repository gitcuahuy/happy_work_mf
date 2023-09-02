export interface IUser {
  id?: string
  email?: string
  name?: string
}

export class User implements IUser {
  id?: string
  email?: string
  name?: string


  constructor(user?: IUser) {
    if (user) {
      this.id = user.id
    }
  }
}
