import {FkyPlayground} from "../../features/fky-playground/FkyPlayground";
import {FkyOutput} from "../../features/fky-output/FkyOutput";
import './FkyEditor.css'
import {useParams} from "react-router-dom";

export const FkyEditor = () => {
    const {id} = useParams()

    return (
        <div className={'fky-editor'}>
            <FkyPlayground/>
            <FkyOutput/>
        </div>
    )
}
