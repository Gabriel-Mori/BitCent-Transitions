import { Transition } from '@/logic/core/interface/TypeTransition'
import Data from "@/logic/utils/Data"
import Money from "@/logic/utils/Money"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListProps {
  transitions: Transition[]
  selectTransitions?: (transition: Transition) => void
}


export default function List(props: ListProps) {

  function renderType(transition: Transition) {
    return (
      <span className={`
            flex justify-center items-center 
            h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
            ${transition.type === 'Receita' ? 'bg-green-500' : 'bg-red-500'}
        `}>
        {transition.type === 'Receita'
          ? <IconTrendingUp />
          : <IconTrendingDown />}
      </span>
    )
  }

  function renderLine(transition: Transition, indice: number) {
    return (
      <div key={transition.id} className={`
            flex items-center gap-3 p-3 cursor-pointer
            ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
        `} onClick={() => props.selectTransitions?.(transition)}>
        {renderType(transition)}
        <span className="w-full md:w-1/2">{transition.description}</span>
        <span className="hidden md:inline flex-1">{Data.ddmmyy.formatar(transition.data)}</span>
        <span>{Money.format(transition.value)}</span>
      </div>
    )
  }

  return (
    <div className={`
    flex flex-col border border-zinc-700
    rounded-xl overflow-hidden
`}>
      {props.transitions.map(renderLine)}
    </div>
  )
}