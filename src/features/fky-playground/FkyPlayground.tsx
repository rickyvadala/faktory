import {FkyName} from "../../components/atoms/fky-name/FkyName";
import {FkyActions} from "./fky-actions/FkyActions";
import {FkyConsole} from "./fky-console/FkyConsole";

export const FkyPlayground = () => {
    return (
        <div className={'fky-playground'}>
            <FkyName editable={true}/>
            <FkyConsole/>
            <FkyActions/>
        </div>
    )
}
