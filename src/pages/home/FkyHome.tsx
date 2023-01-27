import './FkyHome.css'
import {useAppSelector} from "../../store/hooks";
import {allPromptsSelector, viewSelectedSelector} from "../../store/slices/prompts";
import {FkyPromptList} from "../../components/organisms/fky-prompt-list/FkyPromptList";
import {FkyListViewSelector} from "../../components/atoms/fky-list-view-selector/FkyListViewSelector";
import {FkyGrid} from "../../components/organisms/fky-grid/FkyGrid";

export const FkyHome = () => {
    const prompts = useAppSelector(allPromptsSelector);
    const viewSelected = useAppSelector(viewSelectedSelector);

    return (
        <div className={'fky-home'}>
            <FkyListViewSelector title={'Community Prompts'}/>
            {viewSelected === 'list'
                ? <FkyPromptList prompts={prompts}/>
                : <FkyGrid prompts={prompts}/>
            }
        </div>
    )
}
