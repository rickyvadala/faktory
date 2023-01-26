import './FkyActions.css'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {savePrompt, singlePromptSelector} from "../../../store/slices/prompts";
import {useParams} from "react-router-dom";

export const FkyActions = () => {
    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));
    const dispatch = useAppDispatch()

    const [lastSaved, setLastSaved] = useState<Date>()

    const run = () => {
    }
    const save = () => dispatch(savePrompt())
    const history = () => {
    }

    useEffect(() => {
        setLastSaved(prompt.date)
    }, [prompt.date])

    return (
        <div className={'fky-actions'}>
            <div className={'fky-actions_left'}>
                <button onClick={run}>▶</button>
                <span>
                    {lastSaved ? `Last saved ${lastSaved}` : 'Never saved'}
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
