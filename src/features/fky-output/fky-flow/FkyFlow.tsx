import './FkyFlow.css'
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../store/hooks";
import {singlePromptSelector} from "../../../store/slices/prompts";
import {useEffect, useState} from "react";
import {CommandEnum} from "../../../utils/enums/CommandEnum";
import {PlatformEnum} from "../../../utils/enums/PlatformEnum";
import {COMMANDS_ARRAY, CONNECTIONS_ARRAY, PLATFORMS_ARRAY} from "../../../utils/constants";
import {ConnectionEnum} from "../../../utils/enums/ConnectionEnum";

export const FkyFlow = () => {
    const {id} = useParams()
    const prompt = useAppSelector(singlePromptSelector(Number(id)));

    const [flow, setFlow] = useState<Array<any>>([])

    const flowParser = (text: string) => {
        const specialWords = (text: string, specialWordsArray: Array<string>) => {
            const arr = [];
            let startingIndex = 0;
            for (let i = 0; i < specialWordsArray.length; i++) {
                let match = text.substring(startingIndex).match(
                    new RegExp('\\|' + specialWordsArray[i], "g")
                );
                if (match) {
                    arr.push(...match);
                    // @ts-ignore
                    startingIndex += match.index + match[0].length;
                }
            }
            return arr
        }

        const commands = specialWords(text.toLowerCase(), COMMANDS_ARRAY)

        const platformsAndConnections = specialWords(text.toLowerCase(), [...PLATFORMS_ARRAY, ...CONNECTIONS_ARRAY])
        const flowIterator = []

        for (let i = 0; i < Math.min(commands.length, platformsAndConnections.length); i++) {
            const command = CommandEnum[commands[i]?.replace('|', '') as keyof typeof CommandEnum]
            const platformAndConnection = PlatformEnum[platformsAndConnections[i]?.replace('|', '') as keyof typeof PlatformEnum] ||
                ConnectionEnum[platformsAndConnections[i]?.replace('|', '') as keyof typeof ConnectionEnum]
            flowIterator.unshift({id: i, do: command, with: platformAndConnection})
        }
        setFlow(flowIterator)
    }

    useEffect(() => {
        flowParser(prompt.text)
    }, [prompt.text])

    return (
        <div className={'fky-flow'}>
            <ul className={'fky-flow_list'}>
                {flow.map(e => (
                    <li key={e.id} className={'fky-flow_item'}>
                        {e.do} ➔ {e.with}
                    </li>
                ))}
            </ul>
        </div>
    )
}
