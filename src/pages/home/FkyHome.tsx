import './FkyHome.css'
import {useAppSelector} from "../../store/hooks";
import {allPromptsSelector, viewSelectedSelector} from "../../store/slices/prompts";
import {FkyList} from "../../components/organisms/fky-list/FkyList";
import {FkyViewSelector} from "../../components/atoms/fky-view-selector/FkyViewSelector";
import {FkyGrid} from "../../components/organisms/fky-grid/FkyGrid";

export const FkyHome = () => {
    const prompts = useAppSelector(allPromptsSelector);
    const viewSelected = useAppSelector(viewSelectedSelector);

    return (
        <div className={'fky-home'}>
            <FkyViewSelector title={'Community Prompts'}/>
            {viewSelected === 'list'
                ? <FkyList prompts={prompts}/>
                : <FkyGrid prompts={prompts}/>
            }
        </div>
    )
}
