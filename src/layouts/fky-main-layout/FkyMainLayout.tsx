import {Outlet} from "react-router-dom";
import {FkyNavbar} from "../../components/molecules/fky-navbar/FkyNavbar";
import './FkyMainLayout.css'
import {FkySidebar} from "../../components/molecules/fky-sidebar/FkySidebar";

export const FkyMainLayout = () => {
    return (
        <div className={'fky-main-layout'}>
            <FkyNavbar/>
            <div className={'fky-main-layout_content'}>
                <FkySidebar/>
                <main className={'fky-main-layout_outlet'}>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
