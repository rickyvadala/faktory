import {Outlet} from "react-router-dom";
import {FkyNavbar} from "../../components/molecules/fky-navbar/FkyNavbar";
import './FkyMainLayout.css'

export const FkyMainLayout = () => {
    return (
        <div className={'fky-main-layout'}>
            <FkyNavbar/>
            <main className={'fky-main-layout_outlet'}>
                <Outlet/>
            </main>
        </div>
    )
}
