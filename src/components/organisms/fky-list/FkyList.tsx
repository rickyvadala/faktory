import './FkyList.css'
import {IPrompt} from "../../../model/IPrompt";
import {FkyAvatar} from "../../atoms/fky-avatar/FkyAvatar";
import {useNavigate} from "react-router-dom";

type FkyPromptListType = {
    prompts: Array<IPrompt>
}
export const FkyList = ({prompts}: FkyPromptListType) => {
    let navigate = useNavigate();
    return (
        <ul className={'fky-list'}>
            {prompts.map((prompt: IPrompt) => (
                <div key={prompt.id}>
                    <hr/>
                    <li className={'fky-list_item'}
                        onClick={() => navigate(`/editor/${prompt.id}`)}
                    >
                        <div>
                            <h3>{prompt.title}</h3>
                            <p>{prompt.description}</p>
                            <p>{prompt.downloads} Downloads | {prompt.date?.split(' ')[1]}</p>
                        </div>
                        <FkyAvatar src={prompt.img}/>
                    </li>
                </div>
            ))}
        </ul>
    )
}
