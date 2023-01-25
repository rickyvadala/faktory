import parse from 'html-react-parser';
import {renderToString} from 'react-dom/server'

import './FkyConsole.css'
import {useEffect, useRef, useState} from "react";
import {FkyCommandPopover} from "./fky-command-popover/FkyCommandPopover";

const PLACEHOLDER = 'Example: Create a bot that takes my twitter replies and turn them into images) then post them on twitter again.'
export const FkyConsole = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [input, setInput] = useState<string>('')
    const [fakeInputFocused, setFakeInputFocused] = useState<boolean>(true)
    const [placeholder] = useState<string>(PLACEHOLDER)

    const [output, setOutput] = useState<string>('')
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false)

    const onInputChange = (value: string) => {
        setPopoverVisible(value[value.length - 1] === '|')
        setInput(value.replace('  ', ' '))
    }

    const onCommandSelected = (command: string) => {
        setInput((prevState => `${prevState} #${command}# `))
        setPopoverVisible(false)
    }

    const commandButton = (command: string) => renderToString(<p className="command" data-command={command}/>)
    const onCommandClicked = (command: string) => {
        alert(command)
    }

    const realFocus = () => inputRef.current && inputRef.current.focus();
    const onInputFocused = () => {
        realFocus()
        setFakeInputFocused(true)
    }

    useEffect(() => {
        let parsed: string = input.replaceAll('|', '');
        (parsed.match(/(#(.*?)#)/g) || []).forEach(command => {
            parsed = parsed.replace(command, commandButton(command.replaceAll('#', '')))
        })

        setOutput(parsed)
    }, [input])

    useEffect(() => {
        const onFocusout = () => setFakeInputFocused(false)
        const onKeydown = (e: any) => {
            if(e.keyCode == 37 || e.keyCode == 39) e.preventDefault();
        }
        inputRef?.current?.addEventListener('focusout', onFocusout)
        inputRef?.current?.addEventListener('keydown', onKeydown);
        return () => {
            inputRef?.current?.removeEventListener("focusout", onFocusout)
            inputRef?.current?.removeEventListener("keydown", onKeydown)
        };
    }, [inputRef])

    return (
        <div className={'fky-console'}
             onClick={onInputFocused}>
            <textarea className={'fky-console_input'}
                      ref={inputRef}
                      placeholder={placeholder}
                      autoFocus
                      value={input}
                      onChange={(e) => onInputChange(e.target.value)}/>
            <span className={'fly-console_output-container'}>
                <span className={`fly-console_output ${fakeInputFocused ? 'fly-console_output--focused' : ''}`}>
                    {parse(output, {
                        replace: (domNode: any) => {
                            if (domNode.attribs?.class === 'command') {
                                const c: string = domNode.attribs['data-command']
                                return (
                                    <button className={'command'} onClick={() => onCommandClicked(c)}>{c}</button>
                                );
                            }
                        }
                    })}
                </span>
                <FkyCommandPopover visible={popoverVisible} onCommand={onCommandSelected}/>
            </span>
        </div>
    )
}
