import {
  Authentication,
  ObserverUser,
  Unsubscribe,
} from '@/logic/firebase/auth/authentication'
import Collection from '@/logic/firebase/db/Collection'
import User from '../interface/User'

export class UserService {
  private authentication = new Authentication()
  private collection = new Collection()

  async loginGoogle() {
    const user = await this.authentication.loginGoogle()

    if (!user) return null

    let userDb = await this.getUserByEmail(user.email)
    if (!userDb) {
      userDb = await this.save(user)
    }

    return { ...user, ...userDb }
  }

  logout(): Promise<void> {
    return this.authentication.logout()
  }

  async save(user: User) {
    return await this.collection.save('usuarios', user, user.email)
  }

  async getUserByEmail(email: string) {
    return await this.collection.searchById('usuarios', email)
  }

  observerUser(notify: ObserverUser): Unsubscribe {
    return this.authentication.observer(async (user) => {
      notify(
        user ? { ...user, ...(await this.getUserByEmail(user.email)) } : null,
      )
    })
  }
}