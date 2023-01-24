import {FkyLogo} from "../../atoms/fky-logo/FkyLogo";
import {FkyAvatar} from "../../atoms/fky-avatar/FkyAvatar";
import './FkyNavbar.css'
import {FkyName} from "../../atoms/fky-name/FkyName";

export const FkyNavbar = () => {
    return (
        <nav className={'fky-navbar'}>
            <FkyLogo/>
            <FkyName/>
            <FkyAvatar/>
        </nav>
    )
}
