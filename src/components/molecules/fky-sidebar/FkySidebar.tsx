import './FkySidebar.css'
import {useLocation, useNavigate} from "react-router-dom";
import hive from '../../../assets/hive.svg'
import papyrus from '../../../assets/papyrus.svg'
import connections from '../../../assets/connections.svg'

export type FkyMenuType = {
    name: string,
    path: string,
    img: string
}
export const FkyMenu: Array<FkyMenuType> = [
    {path: '/', name: 'Faktory', img: hive},
    {path: '/prompts', name: 'Prompts', img: papyrus},
    {path: '/connections', name: 'Connections', img: connections},
]
export const FkySidebar = () => {
    const location = useLocation();
    const hasSidebar = () => !location.pathname.includes('editor');
    const navigate = useNavigate()
    return (
        <>
            {hasSidebar() &&
              <div className={'fky-sidebar'}>
                  {FkyMenu.map(m => (
                      <div key={m.name}
                           onClick={() => navigate(m.path)}
                           className={`fky-sidebar_item ${location.pathname === m.path ? 'fky-sidebar_item--active' : ''}`}>
                          <img src={m.img} alt={m.name}/>
                          <button>{m.name}</button>
                      </div>
                  ))}
              </div>
            }
        </>
    )
}
