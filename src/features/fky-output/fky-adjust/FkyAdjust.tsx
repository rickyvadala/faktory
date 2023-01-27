import './FkyAdjust.css'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {useParams} from "react-router-dom";
import {commandSelectedSelector, editPrompt, singlePromptSelector} from "../../../store/slices/prompts";

export const FkyAdjust = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));
    const commandSelected = useAppSelector(commandSelectedSelector)

    const [adjust, setAdjust] = useState<any>({})
    useEffect(() => {
        if (prompt.adjustments && commandSelected) {
            setAdjust(prompt.adjustments[commandSelected.toLowerCase()] || {})
        }
    }, [prompt, commandSelected])


    const onChange = (e: any) => {
        setAdjust(e.target.value)
        dispatch(editPrompt({}))
    }

    return (
        <div className={'fky-adjust'}>
        <textarea className={'fky-adjust_text'}
                  placeholder={'--param value'}
                  autoFocus
                  value={adjust.adjust}
                  onChange={onChange}/>
        </div>
    )
}
