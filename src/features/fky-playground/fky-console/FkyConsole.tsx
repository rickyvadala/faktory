import parse from 'html-react-parser';
import {renderToString} from 'react-dom/server'

import './FkyConsole.css'
import {useEffect, useRef, useState} from "react";
import {FkyCommandPopover} from "./fky-command-popover/FkyCommandPopover";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {editPrompt, onCommandSelected, singlePromptSelector} from "../../../store/slices/prompts";
import {AIEnum} from "../../../utils/enums/AIEnum";
import {useParams} from "react-router-dom";
import {FkyCommandButton} from "../../../components/atoms/fky-command-button/FkyCommandButton";

const PLACEHOLDER = 'Example: Create a bot that takes my twitter replies and turn them into images) then post them on twitter again.'
export const FkyConsole = () => {
    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));
    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [input, setInput] = useState<string>('')
    const [fakeInputFocused, setFakeInputFocused] = useState<boolean>(true)

    const [output, setOutput] = useState<string>('')
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false)

    const onInputChange = (value: string) => {
        setPopoverVisible(value[value.length - 1] === '|')
        setInput(value.replace('  ', ' '))
    }

    const onPopoverOptionSelected = (command: string) => {
        setInput((prevState => `${prevState} #${command}# `))
        setPopoverVisible(false)
    }

    const commandButton = (command: string) => renderToString(<FkyCommandButton command={command}/>)
    const onCommandClicked = (command: string) => {
        dispatch(editPrompt({text: input}))
        dispatch(onCommandSelected(command))
    }

    const realFocus = () => inputRef.current && inputRef.current.focus();
    const onInputFocused = () => {
        realFocus()
        setFakeInputFocused(true)
    }

    useEffect(() => {
        dispatch(editPrompt({text: input}))
        let parsed: string = input.toLowerCase().replaceAll('|', '');
        Object.keys(AIEnum).forEach((key: string) => {
            parsed = parsed.replaceAll(`${key}`, `#${AIEnum[key as keyof typeof AIEnum]}#`)
        });
        // Object.keys(CommandEnum).forEach((key: string) => {
        //     parsed = parsed.replaceAll(`${key}`, `#${CommandEnum[key as keyof typeof CommandEnum]}#`)
        // });
        (parsed.match(/(#(.*?)#)/g) || []).forEach(command => {
            parsed = parsed.replace(command, commandButton(command.replaceAll('#', '')))
        })

        setOutput(parsed)
    }, [input])

    useEffect(() => {
        const onFocusout = () => setFakeInputFocused(false)
        const onKeydown = (e: any) => (e.keyCode == 37 || e.keyCode == 39) && e.preventDefault();
        inputRef?.current?.addEventListener('focusout', onFocusout)
        inputRef?.current?.addEventListener('keydown', onKeydown);
        return () => {
            inputRef?.current?.removeEventListener("focusout", onFocusout)
            inputRef?.current?.removeEventListener("keydown", onKeydown)
        };
    }, [inputRef])

    useEffect(() => {
        setInput(prompt.text)
    }, [prompt.text])

    return (
        <div className={'fky-console'} onClick={onInputFocused}>
            <textarea className={'fky-console_input'}
                      ref={inputRef}
                      autoFocus
                      value={input}
                      onChange={(e) => onInputChange(e.target.value)}/>
            <span className={'fly-console_output-container'}>
                <p className={`fly-console_output ${!input ? 'fly-console_output--empty' : ''} ${fakeInputFocused ? 'fly-console_output--focused' : ''}`}>
                    {input
                        ? parse(output, {
                            replace: (domNode: any) => {
                                if (domNode.attribs?.class === 'command') {
                                    const command: string = domNode.attribs['data-command']
                                    const color: string = domNode.attribs['data-color']
                                    return (
                                        <button style={{color}} className={'command'}
                                                onClick={() => onCommandClicked(command)}>
                                            {command}
                                        </button>
                                    );
                                }
                            }
                        })
                        : <span className={'fly-console_placeholder'}>{PLACEHOLDER}</span>
                    }
                </p>
                <FkyCommandPopover visible={popoverVisible} onCommand={onPopoverOptionSelected}/>
            </span>
        </div>
    )
}
