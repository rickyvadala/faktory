import './FkyActions.css'
import {useState} from "react";

export const FkyActions = () => {
    const [lastSaved, setLastSaved] = useState<Date>()

    const parseDate = (date: Date) => `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`

    const run = () => {
    }
    const save = () => setLastSaved(new Date())
    const history = () => {
    }

    return (
        <div className={'fky-actions'}>
            <div className={'fky-actions_left'}>
                <button onClick={run}>▶</button>
                <span>
                    {lastSaved ? `Last saved ${parseDate(lastSaved)}` : 'Never saved'}
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
