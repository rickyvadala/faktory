import React, {useState} from 'react';
import {CommandEnum} from "../../../utils/enums/CommandEnum";
import {PlatformEnum} from "../../../utils/enums/PlatformEnum";

const isPlatform = (command: any) => Object.values(PlatformEnum).includes(command)
const isCommand = (command: any) => Object.values(CommandEnum).includes(command)
const colorDefinition = (command: any) => {
    return isPlatform(command)
        ? '#00E0FF'
        : isCommand(command)
            ? '#FFD600'
            : '#FF1BDA'
}

export const FkyCommandButton = ({command}: any) => {
    const [color] = useState(colorDefinition(command));
    return <button data-command={command}
                   data-color={color}
                   data-special-type={isPlatform(command) ? "platform" : isCommand(command) ? "command" : ""}
                   className={`command`}/>
}

