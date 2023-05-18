
export interface Transition {
  id?: string
  description: string
  value: number
  data: Date
  type: TypeTransition
}


export enum TypeTransition {
  RECEITA = 'Receita',
  DESPESAS = 'Despesas',
}

export const transitionEmpty: Transition = {
  description: '',
  value: 0,
  data: new Date(),
  type: TypeTransition.DESPESAS
}


