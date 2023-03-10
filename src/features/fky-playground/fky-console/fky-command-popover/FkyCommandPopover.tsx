import './FkyCommandPopover.css'
import commandImage from '../../../../assets/command.svg'
import {FkyPopover, FkyPopoverType} from "../../../../components/atoms/fky-popover/FkyPopover";
import {CommandEnum} from "../../../../utils/enums/CommandEnum";
import {useEffect, useRef} from "react";

type FkyCommandPopoverType = FkyPopoverType & {
    onCommand: Function
}
export const FkyCommandPopover = ({visible, setVisible, onCommand}: FkyCommandPopoverType) => {
    const commands = Object.values(CommandEnum).filter((e, i) => i < 7);
    const ref = useRef<HTMLLIElement>(null)

    const focus = () => ref.current && ref.current.focus();

    const keydownHandler = (e: any) => {
        if (e.key.toLowerCase() === 'j' && e.ctrlKey) {
            e.preventDefault()
            setVisible(true)
        }
    };

    useEffect(() => {
        visible && focus()
    }, [visible])

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => {
            document.removeEventListener('keydown', keydownHandler);
        }
    }, []);

    return (
        <FkyPopover className={`fky-command-popover ${visible ? 'fky-command-popover--visible' : ''}`}
                    visible={true}
                    setVisible={setVisible}
        >
            <div className={'fky-command-popover_header'}>
                <span>COMMANDS</span>
                <span><img src={commandImage} alt="Command"/>+J</span>
            </div>
            <div className={'fky-command-popover_body'}>
                <ul>
                    {commands.map((command, i) => (
                        <li ref={!i ? ref : null} tabIndex={0} key={command}
                            onClick={() => onCommand(command)}
                            onKeyPress={(e) => {e.key === 'Enter' && onCommand(command)}}
                        >
                            {command}
                        </li>
                    ))}
                </ul>
            </div>
        </FkyPopover>
    )
}
