import {FkyTitle} from "../../components/atoms/fky-title/FkyTitle";
import {FkyActions} from "./fky-actions/FkyActions";
import {FkyConsole} from "./fky-console/FkyConsole";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {commandSelectedSelector, editorPromptSelector, editPrompt, onCommandSelected} from "../../store/slices/prompts";
import papyrus from '../../assets/papyrus.svg'
import chevron from '../../assets/chevron.svg'
import './FkyPlayground.css'

export const FkyPlayground = () => {
    const dispatch = useAppDispatch()
    const {customizations} = useAppSelector(editorPromptSelector);
    const commandSelected = useAppSelector(commandSelectedSelector)

    const onChange = (e: any) => {
        dispatch(editPrompt({
            customizations: {
                ...customizations,
                [`${commandSelected.toLowerCase()}`]: {
                    ...customizations?.[commandSelected.toLowerCase()],
                    text: e.target.value
                }
            }
        }))
    }

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
                            <textarea value={customizations?.[commandSelected.toLowerCase()]?.text || ''}
                                      onChange={onChange}/>
                        </div>
                    </>
                )
            }
            <FkyActions/>
        </div>
    )
}
