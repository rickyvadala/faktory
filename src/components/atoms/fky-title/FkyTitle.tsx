import './FkyTitle.css'
import papyrus from '../../../assets/papyrus.svg'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {editorPromptSelector, editPrompt, singlePromptSelector} from "../../../store/slices/prompts";
import {useParams} from "react-router-dom";

type FkyTitleType = {
    editable?: boolean
}
export const FkyTitle = ({editable = false}: FkyTitleType) => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {title: savedTitle} = useAppSelector(singlePromptSelector(Number(id)));
    const {title: editorTitle} = useAppSelector(editorPromptSelector);

    const edit = (e: any) => dispatch(editPrompt({title: e.target.value}))
    return (
        <div className={`fky-title`}>
            <img src={papyrus} alt=""/>
            {!editable
                ? <span>{savedTitle}</span>
                : (
                    <input type="text"
                           value={editorTitle}
                           placeholder={savedTitle}
                           onChange={edit}
                    />
                )
            }
        </div>
    )
}
