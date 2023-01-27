import './FkyListViewSelector.css'
import grid from '../../../assets/grid.svg'
import list from '../../../assets/list.svg'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {onViewSelected, viewSelectedSelector} from "../../../store/slices/prompts";

export type FkyListViewSelectorType = 'list' | 'grid'
export const FkyListViewSelector = ({title}: any) => {
    const viewSelected = useAppSelector(viewSelectedSelector)
    const dispatch = useAppDispatch()

    return (
        <div className={'fky-list-view-selector'}>
            <h1>{title}</h1>
            <div className={'fky-list-view-selector_options'}>
                <img className={viewSelected === 'grid' ? 'active' : ''}
                     onClick={() => dispatch(onViewSelected('grid'))}
                     src={grid} alt={'Grid view selector'}/>
                <img className={viewSelected === 'list' ? 'active' : ''}
                     onClick={() => dispatch(onViewSelected('list'))}
                     src={list} alt={'List view selector'}/>
            </div>
        </div>
    )
}
