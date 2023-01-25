import './FkyHome.css'
import {useAppSelector} from "../../store/hooks";
import {allPromptsSelector} from "../../store/slices/prompts";
import {FkyPromptList} from "../../components/organisms/fky-prompt-list/FkyPromptList";
import {FkyListViewSelector} from "../../components/atoms/fky-list-view-selector/FkyListViewSelector";

export const FkyHome = () => {
    const prompts = useAppSelector(allPromptsSelector);

    return (
        <div className={'fky-home'}>
            <FkyListViewSelector title={'Community Prompts'}/>
            <FkyPromptList prompts={prompts}/>
        </div>
    )
}
