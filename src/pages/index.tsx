import Finance from "@/components/finance";
import LandingPage from "@/components/landingPage";
import AuthenticationContext from "@/contexts/UserAuthentication";
import { useContext } from "react";
import Loading from "@/components/template/Loading"


export default function Home() {
  const { user, loading } = useContext(AuthenticationContext)

  if (loading) return <Loading />
  return user ? <Finance /> : <LandingPage />

}
