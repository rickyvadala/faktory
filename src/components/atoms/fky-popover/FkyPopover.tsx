import './FkyPopover.css'

type FkyPopoverType = {
    visible: boolean
}
export const FkyPopover = ({visible}: FkyPopoverType) => {
    return (
        <>
            {visible &&
              <div className={'fky-popover'}>

              </div>
            }
        </>
    )
}
