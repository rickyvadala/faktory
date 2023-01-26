import './FkyLogo.css'
import {useNavigate} from "react-router-dom";
import chevron from '../../../assets/chevron.svg'

export const FkyLogo = () => {
    let navigate = useNavigate();

    return (
        <div className={'fky-logo'} onClick={() => navigate('/')}>
            <img src="/faktory.svg" alt="Faktory logo" className={'fky-logo_img'}/>
            <img src={chevron} alt="" className={'fky-logo_chevron'}/>
        </div>
    )
}
