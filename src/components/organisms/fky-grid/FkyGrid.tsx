import './FkyGrid.css'
import {IPrompt} from "../../../model/IPrompt";
import {FkyAvatar} from "../../atoms/fky-avatar/FkyAvatar";
import {useNavigate} from "react-router-dom";

type FkyGridType = {
    prompts: Array<IPrompt>
}
export const FkyGrid = ({prompts}: FkyGridType) => {
    let navigate = useNavigate();
    return (
        <ul className={'fky-grid'}>
            {prompts.map((prompt: IPrompt) => (
                <div key={prompt.id}>
                    <li
                        className={'fky-grid_item'}
                        onClick={() => navigate(`/editor/${prompt.id}`)}
                    >
                        <FkyAvatar src={prompt.img}/>
                        <div>
                            <h3>{prompt.title}</h3>
                            <p>{prompt.description}</p>
                            <p>{prompt.downloads} Downloads</p>
                            <p>{prompt.date?.split(' ')[1]}</p>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}
