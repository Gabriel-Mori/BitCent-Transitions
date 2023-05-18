import User from "@/logic/core/interface/User"
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth'
import { app } from '../config/App'

export type ObserverUser = (user: User | null) => void
export type Unsubscribe = () => void

export class Authentication {
  private auth: Auth

  constructor() {
    this.auth = getAuth(app)
  }

  async loginGoogle(): Promise<User | null> {
    const resp = await signInWithPopup(this.auth, new GoogleAuthProvider())

    return this.transformerUser(resp.user)
  }

  async logout(): Promise<void> {
    await signOut(this.auth)
  }

  observer(notify: ObserverUser): Unsubscribe {
    return onIdTokenChanged(this.auth, async (firebaseUser) => {
      const user = this.transformerUser(firebaseUser)
      notify(user)
    })
  }

  private transformerUser(firebaseUser: FirebaseUser | null): User | null {
    if (!firebaseUser?.email) return null
    const alternativeName = firebaseUser.email!.split('@')[0]

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName ?? alternativeName,
      email: firebaseUser.email,
      imageUrl: firebaseUser.photoURL,
    }
  }
}