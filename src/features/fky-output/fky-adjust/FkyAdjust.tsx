import './FkyAdjust.css'
import {useState} from "react";

export const FkyAdjust = () => {
    const [adjust, setAdjust] = useState<string>('')

    return (
      <div className={'fky-adjust'}>
        <textarea className={'fky-adjust_text'}
                  autoFocus
                  value={adjust}
                  onChange={(e) => setAdjust(e.target.value)}/>
      </div>
  )
}
