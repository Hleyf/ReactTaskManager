import { useDispatch, useSelector } from 'react-redux'
import { type FilterValue } from '../../types'
import { Filters } from './TodoFilters'
import { clearCompleted, selectCurrentFilter, setTodoFilter } from '../../slices/todo'

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
    dispatch(setTodoFilter(filter))
  }
  const filterSelected = useSelector(selectCurrentFilter)
  const onClearCompleted = (): void => {
    dispatch(clearCompleted())
  }
  return (
        <footer className="footer">
            <span className='float-left text-left w-1/4'>
                <strong>{activeCount}</strong> items left
                {/* <strong>{completedCount}</strong> items completed */}
            </span>
            <div className='w-1/2'>
              <Filters
                filterSelected = {filterSelected}
                onFilterChange = {onFilterChange}
              />
            </div>
            <div className='w-1/4 flex justify-end mr-2'>
                <button
                className={`clear-completed w-auto h-auto ${completedCount > 0 ? 'show' : ''}`}
                onClick={onClearCompleted}
                >
                    Clear completed
                </button>

            </div>
        </footer>
  )
}
