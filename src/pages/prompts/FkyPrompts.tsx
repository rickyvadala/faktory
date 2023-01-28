import './FkyPrompts.css'
import {useAppSelector} from "../../store/hooks";
import {myPromptsSelector, viewSelectedSelector} from "../../store/slices/prompts";
import {FkyList} from "../../components/organisms/fky-list/FkyList";
import {FkyViewSelector} from "../../components/atoms/fky-view-selector/FkyViewSelector";
import {FkyGrid} from "../../components/organisms/fky-grid/FkyGrid";

export const FkyPrompts = () => {
    const prompts = useAppSelector(myPromptsSelector);
    const viewSelected = useAppSelector(viewSelectedSelector);

    return (
        <div className={'fky-prompts'}>
            <FkyViewSelector title={'Prompts'}/>
            {viewSelected === 'list'
                ? <FkyList prompts={prompts}/>
                : <FkyGrid prompts={prompts}/>
            }
        </div>
    )
}
