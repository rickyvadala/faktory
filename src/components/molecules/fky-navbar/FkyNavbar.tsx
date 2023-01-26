import {FkyLogo} from "../../atoms/fky-logo/FkyLogo";
import {FkyAvatar} from "../../atoms/fky-avatar/FkyAvatar";
import './FkyNavbar.css'
import {useLocation} from "react-router-dom";
import {FkyMenu, FkyMenuType} from "../fky-sidebar/FkySidebar";
import {useEffect, useState} from "react";
import {FkyTitle} from "../../atoms/fky-title/FkyTitle";
import {useAppSelector} from "../../../store/hooks";
import {commandSelectedSelector} from "../../../store/slices/prompts";

export const FkyNavbar = () => {
    const location = useLocation();
    const [currentMenu, setCurrentMenu] = useState<FkyMenuType>()
    const commandSelected = useAppSelector(commandSelectedSelector)

    useEffect(() => {
        setCurrentMenu(FkyMenu.find(e => e.path === location.pathname))
    }, [location])

    return (
        <nav className={'fky-navbar'}>
            <FkyLogo/>
            {location.pathname.includes('editor')
                ? <div className={'fky-navbar_center--editor'}>
                    <FkyTitle/>
                    {commandSelected && <b>{commandSelected}</b>}
                </div>
                : <div className={'fky-navbar_center'}>
                    <img src={currentMenu?.img} alt=""/>
                    <span>{currentMenu?.name}</span>
                </div>
            }
            <FkyAvatar/>
        </nav>
    )
}
