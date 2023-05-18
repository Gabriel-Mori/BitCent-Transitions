import { ReactNode, useContext } from 'react'
import { useRouter } from 'next/router'
import Loading from "@/components/template/Loading"
import AuthenticationContext from '@/contexts/UserAuthentication'

interface CheckAuthenticationProps {
  children: ReactNode
}

export function AuthenticationForce({
  children,
}: CheckAuthenticationProps): any {
  const router = useRouter()

  const { user, loading } = useContext(AuthenticationContext)


  if (loading) {
    return <Loading />
  } else if (user?.email) {
    return children
  } else {
    router.push('/')
    return <Loading />
  }
}