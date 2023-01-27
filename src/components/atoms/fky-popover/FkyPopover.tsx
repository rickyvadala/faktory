import './FkyPopover.css'
import {PropsWithChildren, useEffect, useRef} from "react";

export type FkyPopoverType = PropsWithChildren & {
    visible: boolean,
    setVisible: Function,
    className?: string
}
export const FkyPopover = ({visible, setVisible, className, children}: FkyPopoverType) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            return !ref?.current?.contains(event.target) && setVisible(false)
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            {visible &&
              <div className={`fky-popover ${className}`} ref={ref}>
                  {children}
              </div>
            }
        </>
    )
}
