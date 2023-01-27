import React, {useState} from 'react';
import {CommandEnum} from "../../../utils/enums/CommandEnum";

const colorDef = (command: any) => {
    return Object.values(CommandEnum).includes(command) ? '#FFD600' : '#00E0FF'
}

export const FkyCommandButton = ({command}: any) => {
    const [color] = useState(colorDef(command));
    return (
        <button data-command={command} data-color={color} className="command"/>
    );
}

