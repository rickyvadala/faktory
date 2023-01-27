import './FkyActions.css'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {savePrompt, singlePromptSelector} from "../../../store/slices/prompts";
import {useParams} from "react-router-dom";

export const FkyActions = () => {
    const {id} = useParams()
    const {date} = useAppSelector(singlePromptSelector(Number(id)));
    const dispatch = useAppDispatch()

    const run = () => {
    }
    const save = () => dispatch(savePrompt())
    const history = () => {
    }

    return (
        <div className={'fky-actions'}>
            <div className={'fky-actions_left'}>
                <button onClick={run}>▶</button>
                <span>
                    {date ? `Last saved ${date}` : 'Never saved'}
                </span>
            </div>
            <div className={'fky-actions_right'}>
                <button onClick={save}>Save</button>
                |
                <button onClick={history}>History</button>
            </div>
        </div>
    )
}
