import './FkyListViewSelector.css'

export const FkyListViewSelector = ({title}: any) => {
  return (
      <div className={'fky-list-view-selector'}>
          <h1>{title}</h1>
          <div className={'fky-list-view-selector_options'}>
              <button>A</button>
              <button>B</button>
          </div>
      </div>
  )
}
