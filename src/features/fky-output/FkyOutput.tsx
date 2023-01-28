import './FkyOutput.css'
import {useEffect, useState} from "react";
import {FkyFlow} from "./fky-flow/FkyFlow";
import {FkyPreview} from "./fky-preview/FkyPreview";
import {FkyAdjust} from "./fky-adjust/FkyAdjust";
import {useAppSelector} from "../../store/hooks";
import {commandSelectedSelector} from "../../store/slices/prompts";

type FkyOutputOptionType = 'flow' | 'preview' | 'adjust';
export const FkyOutput = () => {
    const [option, setOption] = useState<FkyOutputOptionType>('flow')
    const commandSelected = useAppSelector(commandSelectedSelector)

    useEffect(() => {
        commandSelected ? setOption('adjust') : setOption('flow')
    }, [commandSelected])

    return (
        <div className={'fky-output'}>
            <div className={'fky-output_selector'}>
                <div className={'fky-output_buttons'}>
                    {commandSelected &&
                      <button className={`${option === 'adjust' ? 'active' : ''}`}
                              onClick={() => setOption("adjust")}>
                        Adjust
                      </button>
                    }
                    <button className={`${option === 'flow' ? 'active' : ''}`}
                            onClick={() => setOption("flow")}>
                        Flow
                    </button>
                    <button className={`${option === 'preview' ? 'active' : ''}`}
                            onClick={() => setOption("preview")}>
                        Preview
                    </button>
                </div>
            </div>
            <div className={'fky-output_content'}>
                {option === 'adjust' && <FkyAdjust/>}
                {option === 'flow' && <FkyFlow/>}
                {option === 'preview' && <FkyPreview/>}
            </div>
        </div>
    )
}
