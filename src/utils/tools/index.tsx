import {AIEnum} from "../enums/AIEnum";
import {CommandEnum} from "../enums/CommandEnum";

export const serializedDate = () => {
    const date = new Date();
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
}

export const commandsArray = [...Object.keys(AIEnum), ...Object.keys(CommandEnum)]
