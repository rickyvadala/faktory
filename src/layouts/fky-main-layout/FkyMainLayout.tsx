import {Outlet, useLocation} from "react-router-dom";
import {FkyNavbar} from "../../components/molecules/fky-navbar/FkyNavbar";
import './FkyMainLayout.css'

export const FkyMainLayout = () => {
    const location = useLocation();
    const hasSidebar = () =>  !location.pathname.includes('editor');

    return (
        <div className={'fky-main-layout'}>
            <FkyNavbar/>
            <div className={'fky-main-layout_content'}>
                {hasSidebar() &&
                  <div className={'fky-main-layout_sidebar'}>
                    left
                  </div>
                }
                <main className={'fky-main-layout_outlet'}>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
