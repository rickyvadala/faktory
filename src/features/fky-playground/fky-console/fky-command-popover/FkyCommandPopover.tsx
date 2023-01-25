import './FkyCommandPopover.css'
import commandImage from '../../../../assets/command.svg'
import {FkyPopover, FkyPopoverType} from "../../../../components/atoms/fky-popover/FkyPopover";
import {CommandEnum} from "../../../../utils/enums/CommandEnum";

type FkyCommandPopoverType = FkyPopoverType & {
    onCommand: Function
}
export const FkyCommandPopover = ({visible, onCommand}: FkyCommandPopoverType) => {
    const commands = Object.values(CommandEnum).filter((e, i) => i < 7);

    return (
        <FkyPopover className={`fky-command-popover ${visible ? 'fky-command-popover--visible' : ''}`}
                    visible={true}>
            <div className={'fky-command-popover_header'}>
                <span>COMMANDS</span>
                <span><img src={commandImage} alt="Command"/>+J</span>
            </div>
            <div className={'fky-command-popover_body'}>
                <ul>
                    {commands.map(command => (
                        <li key={command} onClick={() => onCommand(command)}>{command}</li>
                    ))}
                </ul>
            </div>
        </FkyPopover>
    )
}
