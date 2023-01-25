import './FkyPopover.css'
import {PropsWithChildren} from "react";

export type FkyPopoverType = PropsWithChildren & {
    visible: boolean,
    className?: string
}
export const FkyPopover = ({visible, className, children}: FkyPopoverType) => {
    return (
        <>
            {visible &&
              <div className={`fky-popover ${className}`}>
                  {children}
              </div>
            }
        </>
    )
}
