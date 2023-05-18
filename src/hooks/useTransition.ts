import { useContext } from 'react';
import { Transition } from '@/logic/core/interface/TypeTransition'
import { useCallback, useEffect, useState } from 'react'
import services from "@/logic/core/services";
import AuthenticationContext from '@/contexts/UserAuthentication';


export type displayType = 'list' | 'grid'

export function useTransaction() {
  const { user } = useContext(AuthenticationContext)
  const [date, setDate] = useState<Date>(new Date())
  const [transitions, setTransitions] = useState<Transition[]>([])
  const [transition, setTransition] = useState<Transition | null>(null)
  const [displayType, setDisplayType] = useState<displayType>('list')

  const getTransaction = useCallback(async () => {
    if (!user) return

    const transactionsBd = await services.transaction.consultationPerMonth(user, date)

    setTransitions(transactionsBd)
  }, [user, date])


  useEffect(() => {
    getTransaction()
  }, [getTransaction, date])

  async function save(transition: Transition) {
    if (!user) return
    await services.transaction.save(transition, user)
    setTransition(null)
    await getTransaction()

  }

  async function deleted(transition: Transition) {
    if (!user) return
    await services.transaction.delete(transition, user)
    setTransition(null)
    await getTransaction()

  }

  return {
    displayType,
    setDisplayType,
    transitions,
    setTransition,
    transition,
    save,
    deleted,
    user,
    date,
    setDate,
  }
}