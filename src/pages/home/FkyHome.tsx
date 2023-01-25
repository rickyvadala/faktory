import './FkyHome.css'
import {useAppSelector} from "../../store/hooks";
import {allPromptsSelector} from "../../store/slices/prompts";
import {FkyPromptList} from "../../components/organisms/fky-prompt-list/FkyPromptList";

export const FkyHome = () => {
    const prompts = useAppSelector(allPromptsSelector);

    return (
        <div className={'fky-home'}>
            <h1>Community Prompts</h1>
            <FkyPromptList prompts={prompts}/>
        </div>
    )
}
