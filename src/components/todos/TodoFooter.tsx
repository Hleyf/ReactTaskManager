import { useDispatch, useSelector } from 'react-redux'
import { type FilterValue } from '../../types'
import { Filters } from './TodoFilters'
import { clearCompleted, selectCurrentFilter, setTodoFilter } from '../../slices/todo'
import { store } from '../../store'
import { TODO_FILTERS } from '../../common/consts'

interface Props {
  activeCount: number
  completedCount: number
}
export const TodoFooter: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0

}) => {
  const dispatch = useDispatch()
  const onFilterChange = (filter: FilterValue): void => {
    const prev = store.getState().tasks.filter
    console.log('prev', prev)
    console.log('filter', filter)
    if (prev !== null && prev === filter) {
      console.log('passed')
      dispatch(setTodoFilter(TODO_FILTERS.ALL))
      setFilterToAll()
    }
    dispatch(setTodoFilter(filter))
  }
  const filterSelected = useSelector(selectCurrentFilter)
  const onClearCompleted = (): void => {
    dispatch(clearCompleted())
  }

  const setFilterToAll = (): void => {
    const currentUrl = new URL(window.location.href)
    currentUrl.searchParams.set('filter', TODO_FILTERS.ALL)
    window.location.href = currentUrl.toString()
  }
  return (
        <footer className="footer">
            <span className='float-left text-left w-1/4'>
                <strong className="fixed-width">{activeCount}</strong> items left
            </span>
            <div className='w-1/2'>
              <Filters
                filterSelected = {filterSelected}
                onFilterChange = {onFilterChange}
              />
            </div>
            <div className='w-1/4 flex mr-2 justify-around'>
                <button
                className={`clear-completed align-middle rounded border-gradient min-w-28
                 justify-center ${completedCount > 0 ? 'show' : ''}`}
                onClick={onClearCompleted}
                >
                     Clear completed
                </button>

            </div>
        </footer>
  )
}
