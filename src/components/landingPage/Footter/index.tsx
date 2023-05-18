import Area from "../commom/Area";
import Logo from "../commom/Logo";
import SocialNetworks from "./socialNetworks";

export default function Footer() {
  return (
    <Area className="bg-black py-20">
      <div className="flex flex-col items-center md:items-start ">
        <Logo />
        <div className="mt-3 text-zinc-400 text-center md:text-left">
          <div>Plataforma financeira</div>
          <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplifica</span> sua vida</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
        <SocialNetworks />
        <p className="text-zinc-100 mt-7 md:mt-0 text-center">
          <span className="font-black">Bit</span>
          <span className="text-zinc-400 font-thin">CENT</span> ® {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </Area>
  )
}