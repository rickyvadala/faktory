import {FkyPlayground} from "../../features/fky-playground/FkyPlayground";
import {FkyOutput} from "../../features/fky-output/FkyOutput";
import './FkyEditor.css'
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../store/hooks";
import {setEditorPrompt} from "../../store/slices/prompts";
import {useEffect} from "react";

export const FkyEditor = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        Number(id) && dispatch(setEditorPrompt({id: Number(id)}))
    }, [id])

    return (
        <div className={'fky-editor'}>
            <FkyPlayground/>
            <FkyOutput/>
        </div>
    )
}
