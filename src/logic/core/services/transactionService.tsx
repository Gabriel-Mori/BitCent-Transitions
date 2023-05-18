import Collection from "@/logic/firebase/db/Collection";
import Data from "@/logic/utils/Data";
import user from "../interface/User";
import { Transition } from "../interface/TypeTransition";

export class TransactionService {
  private collection = new Collection()

  async save(transaction: Transition, user: user) {
    return this.collection.save(
      `financas/${user.email}/transacoes`,
      transaction
    )
  }

  async delete(transaction: Transition, user: user) {
    return this.collection.delete(
      `financas/${user.email}/transacoes`,
      transaction.id
    )
  }

  async search(user: user) {
    const caminho = `financas/${user.email}/transacoes`
    return await this.collection.search(caminho, 'data', 'asc')
  }

  async consultationPerMonth(user: user, date: Date) {
    const caminho = `financas/${user.email}/transacoes`
    return await this.collection.searchWithFilters(caminho, [
      { field: 'data', operator: '>=', value: Data.firstDay(date) },
      { field: 'data', operator: '<=', value: Data.lastDay(date) },
    ])
  }
}