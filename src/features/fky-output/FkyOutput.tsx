import './FkyOutput.css'
import {useState} from "react";
import {FkyFlow} from "./fky-flow/FkyFlow";
import {FkyPreview} from "./fky-preview/FkyPreview";
import {FkyAdjust} from "./fky-adjust/FkyAdjust";

type FkyOutputOptionType = 'flow' | 'preview' | 'adjust';

export const FkyOutput = () => {
    const [option, setOption] = useState<FkyOutputOptionType>('flow')
    return (
        <div className={'fky-output'}>
            <div className={'fky-output_selector'}>
                <div className={'fky-output_buttons'}>
                    <button className={`${option === 'adjust' ? 'active' : ''}`}
                            onClick={() => setOption("adjust")}>
                        Adjust
                    </button>
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
