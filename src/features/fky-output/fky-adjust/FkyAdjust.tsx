import './FkyAdjust.css'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {commandSelectedSelector, editorPromptSelector, editPrompt} from "../../../store/slices/prompts";

export const FkyAdjust = () => {
    const dispatch = useAppDispatch()
    const {customizations} = useAppSelector(editorPromptSelector);
    const commandSelected = useAppSelector(commandSelectedSelector)

    const onChange = (e: any) => {
        dispatch(editPrompt({
            customizations: {
                ...customizations,
                [`${commandSelected.toLowerCase()}`]: {
                    ...customizations?.[commandSelected.toLowerCase()],
                    adjust: e.target.value
                }
            }
        }))
    }

    return (
        <div className={'fky-adjust'}>
        <textarea className={'fky-adjust_text'}
                  placeholder={'--param value'}
                  autoFocus
                  value={customizations?.[commandSelected.toLowerCase()]?.adjust || ''}
                  onChange={onChange}/>
        </div>
    )
}
