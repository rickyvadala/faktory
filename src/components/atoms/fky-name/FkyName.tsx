import './FkyName.css'
import papyrus from '../../../assets/papyrus.svg'
import {useState} from "react";

type FkyNameType = {
    editable?: boolean
}
export const FkyName = ({editable = false}: FkyNameType) => {
    const [name, setName] = useState<string>('Untitled')

    const save = () => alert('save');

    return (
        <div className={`fky-name`}>
            <img src={papyrus} alt=""/>
            {!editable
                ? <span>{name}</span>
                : <input type="text" value={name}
                         onChange={(e) => setName(e.target.value)}
                         onBlur={save}
                />
            }
        </div>
    )
}
