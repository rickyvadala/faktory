import './FkyLogo.css'
import {useNavigate} from "react-router-dom";

export const FkyLogo = () => {
  let navigate = useNavigate();

  return (
      <img className={'fky-logo'} src="/faktory.svg" alt="Faktory logo" onClick={() => navigate('/')}/>
  )
}
