import useForm from "@/hooks/useForm"
import Cpf from "@/logic/utils/Cpf"
import phone from "@/logic/utils/phone"
import text from "@/logic/utils/text"
import User from "@/logic/core/interface/User"
import { TextInput } from "@mantine/core"
import { useContext, useEffect } from "react"
import Miniform from "../template/MiniForm"
import AuthenticationContext from "@/contexts/UserAuthentication"

export default function UserForm() {
  const { user, updateUser } = useContext(AuthenticationContext)
  const { data, alterAttribute, alterData } = useForm<User>()

  useEffect(() => {
    if (!user) return
    alterData(user)
  }, [user, alterData])

  async function salvar() {
    if (!user) return
    await updateUser(data)
  }

  return (

    <div className="flex flex-col gap-5 mt-7">
      <Miniform
        title="Seu Nome"
        description="Como você gostaria de ser chamado?"
        messageFooter="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
        canSave={text.inBetween(data.name, 3, 80)}
        save={salvar}
      >
        <TextInput
          value={data.name}
          onChange={alterAttribute('name')}
        />
      </Miniform>
      <Miniform
        title="CPF"
        description="Seu CPF é usado internamente pelo sistema."
        messageFooter="Pode relaxar, daqui ele não sai!"
        canSave={true}
        save={salvar}
      >
        <TextInput
          value={Cpf.format(data.cpf ?? '')}
          onChange={alterAttribute('cpf', Cpf.unformat)}
        />
      </Miniform>
      <Miniform
        title="Telefone"
        description="Usado para notificações importantes sobre a sua conta."
        messageFooter="Se receber ligação a cobrar, não foi a gente!"
        canSave={true}
        save={salvar}
      >
        <TextInput
          value={phone.format(data.phone ?? '')}
          onChange={alterAttribute('phone', phone.unformat)}
        />
      </Miniform>
    </div>
  )
}