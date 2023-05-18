import Id from "@/logic/core/commom/id"
import { Transition, TypeTransition } from '@/logic/core/interface/TypeTransition'


const TransitionFalsy: Transition[] = [
  {
    id: Id.new(),
    description: 'Salário',
    data: new Date(2023, 4, 1),
    value: 7123.34,
    type: TypeTransition.RECEITA,
  },
  {
    id: Id.new(),
    description: 'Conta de Luz',
    value: 320.00,
    data: new Date(2023, 4, 3),
    type: TypeTransition.DESPESAS,
  },
  {
    id: Id.new(),
    description: 'Aluguel + Cond.',
    value: 1817.59,
    data: new Date(2023, 4, 3),
    type: TypeTransition.DESPESAS,
  },
  {
    id: Id.new(),
    description: 'Cartão de Crédito',
    value: 2200.00,
    data: new Date(2023, 4, 10),
    type: TypeTransition.DESPESAS,
  },
  {
    id: Id.new(),
    description: 'Conta de Água',
    value: 174.35,
    data: new Date(2023, 4, 8),
    type: TypeTransition.DESPESAS,
  },
  {
    id: Id.new(),
    description: 'Mensalidade MBA',
    value: 750.00,
    data: new Date(2023, 4, 2),
    type: TypeTransition.DESPESAS,
  },

  {
    id: Id.new(),
    description: 'Investimentos',
    data: new Date(2023, 4, 1),
    value: 2123.34,
    type: TypeTransition.RECEITA,
  },
]

export default TransitionFalsy