import './FkyLogo.css'
import {useLocation, useNavigate} from "react-router-dom";
import chevron from '../../../assets/chevron.svg'

export const FkyLogo = () => {
    let navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={'fky-logo'} onClick={() => navigate('/')}>
            <img src="/faktory.svg" alt="Faktory logo" className={'fky-logo_img'}/>
            {location.pathname.includes('editor') && <img src={chevron} alt="" className={'fky-logo_chevron'}/>}
        </div>
    )
}
