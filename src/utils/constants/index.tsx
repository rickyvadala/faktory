import {PlatformEnum} from "../enums/PlatformEnum";
import {CommandEnum} from "../enums/CommandEnum";
import {ConnectionEnum} from "../enums/ConnectionEnum";

export const SPECIAL_WORDS_PREFIX = '|'
export const SPECIAL_WORDS_ARRAY = [
    ...Object.keys(PlatformEnum),
    ...Object.keys(CommandEnum),
    ...Object.keys(ConnectionEnum)
]
export const COMMANDS_ARRAY = [...Object.keys(CommandEnum)]
export const PLATFORMS_ARRAY = [...Object.keys(PlatformEnum)]
export const CONNECTIONS_ARRAY = [...Object.keys(ConnectionEnum)]
