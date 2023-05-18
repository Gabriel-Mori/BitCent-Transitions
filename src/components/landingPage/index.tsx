import Page from "../template/Page";
import Benefits from "./Benefits";
import Depositions from "./Depositions";
import Emphasis from "./Emphasis";
import Footer from "./Footter";
import Header from "./Header";

export default function LandingPage() {

  return (
    <Page external>
      <Header />
      <Emphasis />
      <Benefits />
      <Depositions />
      <Footer />
    </Page>

  )
}