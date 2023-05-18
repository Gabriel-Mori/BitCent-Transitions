import { Button } from "@mantine/core"

interface MiniformProps {
  title: string
  description: string
  messageFooter: string
  canSave: boolean
  save: () => void
  children: any
}

export default function Miniform(props: MiniformProps) {
  return (
    <div className={`
            flex flex-col overflow-hidden
            border border-zinc-800 rounded-lg
        `}>
      <div className="flex flex-col p-7">
        <div className="text-3xl font-black">{props.title}</div>
        <div className="mt-4 text-zinc-400">{props.description}</div>
        <div className="mt-3">
          {props.children}
        </div>
      </div>
      <div className={`
                flex justify-end md:justify-between items-center
                bg-black px-7 py-5
            `}>
        <span className="hidden md:inline text-zinc-400">{props.messageFooter}</span>
        <Button
          color={props.canSave ? 'green' : 'gray'}
          className={props.canSave ? 'bg-green-500' : 'bg-gray-800'}
          onClick={() => props.canSave ? props.save() : null}
        >Salvar</Button>
      </div>
    </div>
  )
}