import './FkyLogo.css'
import {useLocation, useNavigate} from "react-router-dom";
import chevron from '../../../assets/chevron.svg'
import {useAppDispatch} from "../../../store/hooks";
import {onCommandSelected} from "../../../store/slices/prompts";

export const FkyLogo = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch()

    const goHome = () => {
        dispatch(onCommandSelected(''))
        navigate('/')
    }

    return (
        <div className={'fky-logo'} onClick={goHome}>
            <img src="/faktory.svg" alt="Faktory logo" className={'fky-logo_img'}/>
            {location.pathname.includes('editor') && <img src={chevron} alt="" className={'fky-logo_chevron'}/>}
        </div>
    )
}
