import './FkyPrompts.css'
import {useAppSelector} from "../../store/hooks";
import {myPromptsSelector} from "../../store/slices/prompts";
import {FkyPromptList} from "../../components/organisms/fky-prompt-list/FkyPromptList";
import {FkyListViewSelector} from "../../components/atoms/fky-list-view-selector/FkyListViewSelector";

export const FkyPrompts = () => {
    const prompts = useAppSelector(myPromptsSelector);

    return (
        <div className={'fky-prompts'}>
            <FkyListViewSelector title={'Prompts'}/>
            <FkyPromptList prompts={prompts}/>
        </div>
    )
}
