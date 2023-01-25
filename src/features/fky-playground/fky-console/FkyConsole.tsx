import './FkyConsole.css'
import {useState} from "react";
import {FkyCommandPopover} from "./fky-command-popover/FkyCommandPopover";

const PLACEHOLDER = 'Example: Create a bot that takes my twitter replies and turn them into images) then post them on twitter again.'
export const FkyConsole = () => {
    const [input, setInput] = useState<string>('')
    const [placeholder] = useState<string>(PLACEHOLDER)

    const [output, setOutput] = useState<JSX.Element>(<></>)
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false)

    const generator = (value: string) => {
        setPopoverVisible(value[value.length - 1] === '|')
        setInput(value)
        setOutput(prevState => <>{prevState}{value}</>)
    }

    const onCommand = (command: string) => {
        setInput((prevState => prevState + ' ' + command))
        setOutput(prevState =>
            <>
                {prevState}
                <button onClick={() => alert(command)}
                        className={'command'}>
                    {command}
                </button>
            </>)
        setPopoverVisible(false)
    }

    return (
        <div className={'fky-console'}>
            <textarea className={'fky-console_input'}
                      placeholder={placeholder}
                      autoFocus
                      value={input}
                      onChange={(e) => generator(e.target.value)}/>
            <span className={'fly-console_output-container'}>
                <span className={'fly-console_output'}>
                    {output}
                </span>
                <FkyCommandPopover visible={popoverVisible} onCommand={onCommand}/>
            </span>
        </div>
    )
}
