import useForm from "@/hooks/useForm"
import { Transition, TypeTransition } from '@/logic/core/interface/TypeTransition'
import Money from "@/logic/utils/Money"
import { Button, Group, Radio, TextInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import "dayjs/locale/pt-br"

interface FormProps {
    transition: Transition
    cancel?: () => void
    save?: (transition: Transition) => void
    delete?: (transition: Transition) => void
}

export default function Form(props: FormProps) {
    const { data, alterAttribute } = useForm(props.transition)

    return (
        <div className={`
          flex flex-col border border-zinc-700
          rounded-xl overflow-hidden
      `}>
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <TextInput
                    label="Descrição"
                    value={data.description}
                    onChange={alterAttribute('description')}
                />
                <TextInput
                    label="Valor"
                    value={Money.format(data.value)}
                    onChange={alterAttribute('value', Money.unformat)}
                />
                <DatePickerInput
                    label="Data"
                    value={data.data}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY"
                    onChange={alterAttribute('data')}
                />
                <Radio.Group
                    value={data.type}
                    onChange={alterAttribute('type')}
                >
                    <Group>
                        <Radio value={TypeTransition.RECEITA} label="Receita" />
                        <Radio value={TypeTransition.DESPESAS} label="Despesa" />
                    </Group>
                </Radio.Group>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <Button
                    className="bg-green-500" color="green"
                    onClick={() => props.save?.(data)}
                >Salvar</Button>
                <Button
                    className="bg-zinc-500" color="gray"
                    onClick={props.cancel}
                >Voltar</Button>
                <div className="flex-1"></div>
                {props.transition.id && (
                    <Button
                        className="bg-red-500" color="red"
                        onClick={() => props.delete?.(props.transition)}
                    >Excluir</Button>
                )}
            </div>
        </div>
    )
}