// https://unicode-table.com/en/1F44B/

import AuthenticationContext from "@/contexts/UserAuthentication"
import { useContext } from "react"
export default function Welcome() {
  const { user } = useContext(AuthenticationContext)

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">
        {user?.name?.split(' ')[0]}
      </span>
    )
  }

  return (
    <div className={`text-3xl font-black`}>
      Olá {renderizarNome()} 👋
    </div>
  )
}
