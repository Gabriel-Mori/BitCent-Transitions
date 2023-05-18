import Area from "../commom/Area";
import Slogan from "./Slogan";
import principal from '../.././../../public/principal.jpg'
import ResponsiveImage from "../commom/ResponsiveImage";



export default function Emphasis() {
  return (
    <Area id="inicio" className="pt-20">
      <div className={`h-[500px] flex items-center justify-around`}>
        <Slogan />
        <ResponsiveImage image={principal}
          className='rotate-3 hidden md:inline' />
      </div>
    </Area>
  )
}