import './FkyTitle.css'
import papyrus from '../../../assets/papyrus.svg'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {editPrompt, singlePromptSelector} from "../../../store/slices/prompts";
import {useParams} from "react-router-dom";

type FkyTitleType = {
    editable?: boolean
}
export const FkyTitle = ({editable = false}: FkyTitleType) => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));

    const [name, setName] = useState<string>()

    useEffect(() => {
        setName(prompt.title)
    }, [prompt.title])

    const edit = (e: any) => {
        e.target.value && dispatch(editPrompt({title: e.target.value}))
    };

    return (
        <div className={`fky-title`}>
            <img src={papyrus} alt=""/>
            {!editable
                ? <span>{name}</span>
                : <input type="text" placeholder={name} onChange={edit}/>
            }
        </div>
    )
}
