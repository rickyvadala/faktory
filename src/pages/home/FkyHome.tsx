import {FkyPlayground} from "../../features/fky-playground/FkyPlayground";
import {FkyOutput} from "../../features/fky-output/FkyOutput";
import './FkyHome.css'

export const FkyHome = () => {
  return (
      <div className={'fky-home'}>
        <FkyPlayground/>
        <FkyOutput/>
      </div>
  )
}
