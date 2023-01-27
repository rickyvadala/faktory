import {FkyTitle} from "../../components/atoms/fky-title/FkyTitle";
import {FkyActions} from "./fky-actions/FkyActions";
import {FkyConsole} from "./fky-console/FkyConsole";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {commandSelectedSelector, onCommandSelected, singlePromptSelector} from "../../store/slices/prompts";
import papyrus from '../../assets/papyrus.svg'
import chevron from '../../assets/chevron.svg'
import './FkyPlayground.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const FkyPlayground = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));
    const commandSelected = useAppSelector(commandSelectedSelector)

    const [adjustText, setAdjustText] = useState<string>('')
    useEffect(() => {
        if (prompt.adjustments && commandSelected) {
            setAdjustText((prompt.adjustments[commandSelected.toLowerCase()] || {}).text || '')
        }
    }, [prompt, commandSelected])

    return (
        <div className={'fky-playground'}>
            {!commandSelected
                ? (
                    <>
                        <FkyTitle editable={true}/>
                        <FkyConsole/>
                    </>
                )
                : (
                    <>
                        <div className={'fky-playground_command'}
                             onClick={() => dispatch(onCommandSelected(''))}>
                            <img className={'fky-playground_command-chevron'} src={chevron} alt=""/>
                            <img className={'fky-playground_command-papyrus'} src={papyrus} alt=""/>
                            <span>{commandSelected}</span>
                        </div>
                        <div className={'fky-playground_command-text'}>
                            <textarea value={adjustText} onChange={(e) => setAdjustText(e.target.value)}/>
                        </div>
                    </>
                )
            }
            <FkyActions/>
        </div>
    )
}
