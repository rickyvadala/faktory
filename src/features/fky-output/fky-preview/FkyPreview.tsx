import './FkyPreview.css'
import {useState} from "react";

const PREVIEW = '1. Step Into Style with Our Sneakers \n' +
    '2. Take the Lead with Our Sneakers \n' +
    '3. Get Ready to Run with Our Sneakers \n' +
    '4. Comfort and Style in Every Step with Our Sneakers \n' +
    '5. Put Your Best Foot Forward with Our Sneakers \n' +
    '6. Unleash Your Inner Athlete with Our Sneakers \n' +
    '7. Step Into the Future with Our Sneakers \n' +
    '8. Feel the Freedom with Our Sneakers \n' +
    '9. Make Every Step Count with Our Sneakers \n' +
    '10. Take On the World with Our Sneakers'

export const FkyPreview = () => {
  const [preview, setPreview] = useState<string>(PREVIEW)
  return (
      <div className={'fky-preview'}>
          <textarea className={'fky-preview_text'}
                    readOnly
                    value={preview}
                    onChange={(e) => setPreview(e.target.value)}/>
      </div>
  )
}
