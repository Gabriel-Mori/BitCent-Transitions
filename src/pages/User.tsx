import Content from "@/components/template/content";
import Header from "@/components/template/Header";
import Page from "@/components/template/Page";
import TitlePageUser from "@/components/template/TitlePageUser";
import { IconForms } from "@tabler/icons-react";
import UserForm from "@/components/user/useForm";
import { useContext } from "react";
import AuthenticationContext from "@/contexts/UserAuthentication";


export default function SubmitUser() {
  const { user } = useContext(AuthenticationContext)

  return (
    <Page>
      <Header />
      <Content>
        <TitlePageUser icon={<IconForms />} main='Dados Cadastrais' secondary={`Informações de ${user?.email}`} />
        <UserForm />
      </Content>

    </Page>
  )
}