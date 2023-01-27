import './FkyPrompts.css'
import {useAppSelector} from "../../store/hooks";
import {myPromptsSelector, viewSelectedSelector} from "../../store/slices/prompts";
import {FkyPromptList} from "../../components/organisms/fky-prompt-list/FkyPromptList";
import {FkyListViewSelector} from "../../components/atoms/fky-list-view-selector/FkyListViewSelector";
import {FkyGrid} from "../../components/organisms/fky-grid/FkyGrid";

export const FkyPrompts = () => {
    const prompts = useAppSelector(myPromptsSelector);
    const viewSelected = useAppSelector(viewSelectedSelector);

    return (
        <div className={'fky-prompts'}>
            <FkyListViewSelector title={'Prompts'}/>
            {viewSelected === 'list'
                ? <FkyPromptList prompts={prompts}/>
                : <FkyGrid prompts={prompts}/>
            }
        </div>
    )
}
