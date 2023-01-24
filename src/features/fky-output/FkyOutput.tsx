import './FkyOutput.css'
import {useState} from "react";
import {FkyFlow} from "./fky-flow/FkyFlow";
import {FkyPreview} from "./fky-preview/FkyPreview";

type FkyOutputOptionType = 'flow' | 'preview';

export const FkyOutput = () => {
    const [option, setOption] = useState<FkyOutputOptionType>('flow')
    return (
        <div className={'fky-output'}>
            <div className={'fky-output_selector'}>
                <div className={'fky-output_buttons'}>
                    <button className={`${option === 'flow' && 'active'}`}
                            onClick={() => setOption("flow")}>
                        Flow
                    </button>
                    <button className={`${option === 'preview' && 'active'}`}
                            onClick={() => setOption("preview")}>
                        Preview
                    </button>
                </div>
            </div>
            <div className={'fky-output_content'}>
                {option === 'flow'
                    ? <FkyFlow/>
                    : <FkyPreview/>
                }
            </div>
        </div>
    )
}
