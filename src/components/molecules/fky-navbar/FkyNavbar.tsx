import {FkyLogo} from "../../atoms/fky-logo/FkyLogo";
import {FkyAvatar} from "../../atoms/fky-avatar/FkyAvatar";
import './FkyNavbar.css'
import {FkyName} from "../../atoms/fky-name/FkyName";
import {useLocation} from "react-router-dom";
import {FkyMenu, FkyMenuType} from "../fky-sidebar/FkySidebar";
import {useEffect, useState} from "react";

export const FkyNavbar = () => {
    const location = useLocation();
    const [currentMenu, setCurrentMenu] = useState<FkyMenuType>()

    useEffect(() => {
        setCurrentMenu(FkyMenu.find(e => e.path === location.pathname))
    }, [location])

    return (
        <nav className={'fky-navbar'}>
            <FkyLogo/>
            {location.pathname.includes('editor')
                ? <FkyName/>
                : <div className={'fky-navbar_center'}>
                    <img src={currentMenu?.img} alt=""/>
                    <span>{currentMenu?.name}</span>
                </div>
            }
            <FkyAvatar/>
        </nav>
    )
}
